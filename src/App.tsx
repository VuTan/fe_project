import React from 'react';

import {createBrowserRouter, Outlet, RouteObject, RouterProvider} from "react-router-dom";
import './App.css';
import HomeLayout from "./component/Home/HomeLayout";
import MainLayout from "./component/MainLayout";
import ShopPage from "./component/Shop/ShopPage";
import ProductDetail from "./component/Product/ProductDetail";
import NotFound from "./component/404/NotFound";
import "../src/i18n/i18n";
import FavouriteProduct from "./component/Product/FavouriteProduct"; // Import FavouriteProduct component
import News from "./component/News/News";
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
            },
            {
                path: "/favouriteProduct", // Add FavouriteProduct
                element: <FavouriteProduct />
            },
            {
                path: "/news",
                element: <News/>
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
