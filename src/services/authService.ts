import {IAuth, ITokens, IUser} from "../interfaces";
import {string} from "joi";
import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constans";

const accessTokenKey = 'access'
const refreshTokenKey = 'refresh';

const authService = {
    register(user:IAuth): IRes<IUser> { //регістрація - input user, out response:IRes<IUser>
        return apiService.post(urls.auth.register, user)
    },
    me():IRes<IUser>  { // запит на самого себе
        return apiService.get(urls.auth.me)
    },
    setTokens({access, refresh}: ITokens): void { //import object ITokens, повертати нічого не буде  void
        localStorage.setItem(accessTokenKey, access) //записуємо Token key
        localStorage.setItem(refreshTokenKey, refresh) //записуємо Token key
    },
    getAccessToken():string {
        return localStorage.getItem(accessTokenKey);
    },
    getRefreshToken():string{
        return localStorage.getItem(refreshTokenKey);
    },
    deleteTokens(): void {
        localStorage.removeItem(accessTokenKey);
        localStorage.removeItem(refreshTokenKey);
    }
}

export {authService};