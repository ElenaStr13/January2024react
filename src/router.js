import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {userService} from "./service/userService";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostsPage} from "./pages/PostsPage";
import {PostDetails} from "./components/PostContainer/PostDetails";
import {postService} from "./service/postService";
import {PostDetailsPage} from "./pages/PostDetailsPage";




const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:
            [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UsersPage/>, loader:() => userService.getAll()},
            {path: 'users/:id', element: <UserDetailsPage/>,
                loader: ({params: {id}}) => userService.getById(id), children: [
                    {path: 'posts', element: <PostsPage/>}
                ]
            },
            {
                //id instead postId not working
                path: 'posts/:postId', element: <PostDetailsPage/>,
                loader: ({params: {postId}}) => postService.getById(postId),
            }
            ]
    }
]);

export {router};