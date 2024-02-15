import {apiService} from "./apiService";

import {urls} from "../constans/urls";

const commentService = {
    getByPostId: (postId) => apiService.get(urls.comments.base, {params: {postId}})
}

export { commentService}