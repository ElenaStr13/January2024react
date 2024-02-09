import {apiService} from "./apiService";
import {urls} from "../constance/urls";

const commentService = {
    getAll: () => apiService.get(urls.comments.base),
    create: (data) => apiService.post(urls.comments.base, data),
    // getById: (id) => apiService(urls.users.byId(id))
}

export {commentService}