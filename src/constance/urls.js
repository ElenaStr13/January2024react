const baseURL = 'https://jsonplaceholder.typicode.com';
const carsBaseURL = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'
const users = '/users'
const comments = '/comments'

const urls = {
    users: {
        base:users,
        byId:(id)=>`${users}/${id}`
    },
    comments: {
        base:comments,
        byId:(id)=>`${comments}/${id}`
    },
    cars: {
        base: cars,
        byId: (id) => `${cars}/${id}`
    }
}

export {
    carsBaseURL,
    baseURL,
    urls
}