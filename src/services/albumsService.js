import {apiService} from "./apiService";
import {urls} from "../constance/urls";

const albumService = {
    getAll: () => apiService.get(urls.albums.base),
    getById: (id) => apiService.get(urls.albums.byId(id))
}

export {
    albumService
}