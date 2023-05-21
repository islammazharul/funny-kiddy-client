import {
    Navigate,
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
import MyProducts from "../pages/MyProducts/MyProducts";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            // {
            //     path: "/",
            //     element: <Navigate to="/"></Navigate>
            // },
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addToys",
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path: "/myToys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>
            },
            {
                path: "singleProduct/:id",
                element: <PrivateRoute><SingleProduct></SingleProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://funny-kiddy-server.vercel.app/singleProduct/${params.id}`)
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