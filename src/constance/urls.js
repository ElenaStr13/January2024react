const baseURL = 'https://jsonplaceholder.typicode.com'

const todos = '/todos';
const albums = '/albums';
const comments = '/comments';

const posts = 'posts';

const urls = {
    todos: {
        base: todos,
        byId: (id) => `${todos}/${id}`
    },
    albums: {
        base: albums,
        byId: (id) => `${albums}/${id}`
    },
    comments: {
        base: comments,
        byId: (postId) => `${comments}/${postId}`,
        getPostsByCommentId: (postId) => `${comments}/${postId}`
    },
    posts: {
        byId: (id) => `${posts}/${id}`
    }

}

export {
    baseURL,
    urls,
    todos,
    albums,
    comments,
    posts
}