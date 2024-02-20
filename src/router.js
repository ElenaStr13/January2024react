import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {EpisodesPage} from "./pages/EpisodePage";
import {CharactersPage} from "./pages/ChaptersPage";

const router = createBrowserRouter([
    {
        path:'', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'episodes'}/>
            },
            {
                path: 'episodes', element: <EpisodesPage/>
            },
            {
                path: 'characters/:id', element: <CharactersPage/>
            }
        ]
    }
])

export {
    router
}