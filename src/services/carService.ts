import {ICar} from "../interfaces";
import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constans";

const carService = {
    getAll:(): IRes<ICar[]> => apiService.get(urls.cars.base)
}

export {carService};