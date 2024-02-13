import {apiService} from "./apiService";
import {urls} from "../constance/urls";

const todosService = {
    getAll: () => apiService.get(urls.todos)
}

export {todosService}