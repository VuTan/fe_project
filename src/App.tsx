import React from 'react';

import {createBrowserRouter, Outlet, RouteObject, RouterProvider} from "react-router-dom";
import './App.css';
import HomeLayout from "./component/Home/HomeLayout";
import MainLayout from "./component/MainLayout";
import ShopPage from "./component/Shop/ShopPage";
import ProductDetail from "./component/Product/ProductDetail";
import NotFound from "./component/404/NotFound";
import Login from "./component/Login/Login";
import Register from "./component/SigUp/SigUp";
import "../src/i18n/i18n";
import FavouriteProduct from "./component/Product/FavouriteProduct";
import Cart from "./component/Cart/Cart";
import New from "./component/News/New";
import NewsDetail from "./component/News/NewsDetail";
import Profile from "./component/Profile/Profile";


const appRouters: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <HomeLayout/>
            },
            {
                path: "/shop",
                element: <ShopPage/>,
            },
            {
                path: "/shop/product/:id",
                element: <ProductDetail/>
            },
            {
                path: "/news/:id",
                element: <NewsDetail/>
            },
            {
                path: "*",
                element: <NotFound/>
            },
            {
                path: "/Login",
                element: <Login/>
            },
            {
                path: "/SigUp",
                element: <Register/>
            },
            {
                path: "/favouriteProduct",
                element: <FavouriteProduct />
            },
            {
                path: "/Cart",
                element: <Cart />
            },
            {
                path: "/news",
                element: <New/>
            },
            {
                path: "/profile",
                element: <Profile/>
            }
        ]
    }
];

const router = createBrowserRouter([
    {
        element: (
            <Outlet/>
        ),
        children: appRouters,
    }
]);

const App: React.FC = () => {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;