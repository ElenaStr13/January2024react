import axios, {AxiosError} from "axios";

import {baseURL, urls} from "../constans";
import {authService} from "./authService";
import {router} from "../router";

let isRefreshing = false;
type IWaitList = () => void;
const waitList: IWaitList[] = [];
const apiService = axios.create({baseURL});

apiService.interceptors.request.use(req=> {
    const accessToken = authService.getAccessToken();
    if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
    }
    return req
})

apiService.interceptors.response.use(
    res=>res,
    async (error:AxiosError)=>{
        const originalRequest = error.config; //запит на помилку
        if (error.response.status === 401) {   //якщо помилка 401
            if (!isRefreshing) {
                isRefreshing = true
                try {
                    await authService.refresh(); // виконується refresh запит
                    isRefreshing = false;          // закінчується refresh
                    runAfterRefresh();             // виконуються функції, які не встигли виконатися в refresh запиті, так як він виконує тільки одну дію
                    return apiService(originalRequest)  //ще раз робить запит на cars або me
                }catch (e) {
                    authService.deleteTokens();
                    isRefreshing = false;
                    router.navigate('/login?SessionExpired=true') //query parameter => ?SessionExpired=true
                    return Promise.reject(error)                     //перехоплюємо і віддаємо помилку користувачеві
                }
            }
            if (originalRequest.url === urls.auth.refresh) {       //запит на мій refresh
                return Promise.reject(error)                       // передаю  error
            }
            return new Promise(resolve => {               //поповнюємо waitList
                subscribeToWaitList(() => {
                    resolve(apiService(originalRequest))
                })
            })
    }
        return Promise.reject(error)  // інша помилка, ніж 401

    }
)
const subscribeToWaitList = (cb: IWaitList): void => {
    waitList.push(cb)                                   //звертається до waitList і додає callback function
}                                                       // але не запускає ці функції

const runAfterRefresh = (): void => {                  //function яка буде запускати наші функціі з waitList
    while (waitList.length) {
        const cb = waitList.pop();
        cb()
    }
}

export {apiService};