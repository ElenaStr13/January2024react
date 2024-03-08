import {apiService} from "./apiService";
import {urls} from "../constans";

const episodeService = {
    getAll: (page ) => apiService.get(urls.episodes, {params: {page}})
}

export {
    episodeService
}