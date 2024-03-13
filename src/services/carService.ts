import {ICar, IPagination} from "../interfaces";
import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constans";

const carService = {
    getAll:(): IRes<IPagination<ICar>> => apiService.get(urls.cars.base)
}

export {carService};