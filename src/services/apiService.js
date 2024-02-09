import axios from "axios";

import {baseURL} from "../constance/urls";
import {carsBaseURL} from "../constance/urls"

const apiService = axios.create({baseURL});
const apiCarsService = axios.create({baseURL:carsBaseURL});

export {
    apiService,
    apiCarsService
}