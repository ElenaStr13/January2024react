import {apiService} from "./apiService";

import {urls} from "../constans/urls";

const postService = {
    getById: (postId) => apiService.get(urls.posts.byId(postId)),
    getByUserId: (userId) => apiService.get(urls.posts.base, {params: {userId}})
}

export { postService}