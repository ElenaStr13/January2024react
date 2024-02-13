import {apiService} from "./apiService";
import {urls} from "../constance/urls";

const albumService = {
    getAll: () => apiService.get(urls.albums)
}

export {albumService}