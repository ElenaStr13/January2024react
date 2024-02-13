import {apiService} from "./apiService";
import {urls} from "../constance/urls";

const commentService = {
    getAll: () => apiService.get(urls.comments)
}

export { commentService}