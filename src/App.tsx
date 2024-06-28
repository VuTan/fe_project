import React from 'react';

import {createBrowserRouter, Outlet, RouteObject, RouterProvider} from "react-router-dom";
import './App.css';
import HomeLayout from "./component/Home/HomeLayout";
import MainLayout from "./component/MainLayout";
import ShopPage from "./component/Shop/ShopPage";
import ProductDetail from "./component/Product/ProductDetail";
import NotFound from "./component/404/NotFound";

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
                path: "*",
                element: <NotFound/>
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
