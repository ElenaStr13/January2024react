import {createBrowserRouter, Navigate} from "react-router-dom";

import {UsersPage, UserDetailsPage, PostsPage, PostDetailsPage} from "./pages";
import {MainLayout} from "./layouts";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'users'}/>
            },
            {
                path: 'users', element: <UsersPage/>
            },
            {
                path: 'users/:id', element: <UserDetailsPage/>, children: [
                    {
                        path: 'posts', element: <PostsPage/>
                    }
                ]
            },
            {
                path: 'posts/:id', element: <PostDetailsPage/>
            }
        ]
    }
]);

export {
    router
}