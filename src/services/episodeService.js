import {apiService} from "./apiService";
import {urls} from "../constans";

const episodeService = {
    getAll: (page ) => apiService.get(urls.episode.base, {params: {page}})
}

export {
    episodeService
}