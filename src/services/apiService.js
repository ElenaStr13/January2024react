import axios from "axios";

import {baseURL} from "../constance/urls";


const apiService = axios.create({baseURL});

export {
    apiService
}