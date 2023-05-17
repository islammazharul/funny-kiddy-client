import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import AddToys from "../pages/AddToys/AddToys";
import MyToys from "../pages/MyToys/MyToys";
import AllToys from "../pages/AllToys/AllToys";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addToys",
                element: <AddToys></AddToys>
            },
            {
                path: "/myToys",
                element: <MyToys></MyToys>
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]
    },
]);

export default router;