import {apiCarsService} from "./apiService";
import {urls} from "../constance/urls";

const carService = {
    getAll: () => apiCarsService.get(urls.cars.base),
    create: (data) => apiCarsService.post(urls.cars.base, data),
    updateById: (id, data) => apiCarsService.put(urls.cars.byId(id), data),
    deleteById: (id) => apiCarsService.delete(urls.cars.byId(id))
}


export {
    carService
}