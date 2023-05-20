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
import Error from "../pages/Error/Error";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import SingleProduct from "../pages/SingleProduct/SingleProduct";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
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
                path: "singleProduct/:id",
                element: <SingleProduct></SingleProduct>,
                loader: ({ params }) => fetch(`http://localhost:6500/singleProduct/${params.id}`)
            },
            // {
            //     path: "myToys/updateProduct/:id",
            //     element: <UpdateProduct></UpdateProduct>,
            //     loader: ({ params }) => fetch(`http://localhost:6500/allProducts/${params.id}`)
            // },
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