import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import ContactPage from "../components/Contact1";
import Vision from "../components/Vision";
import Career from "../components/Career";
import Products from "../components/Products";
import Root, {loader as rootLoader} from './root';
import { productDetailLoader, productLoader } from "./products";
import Error from "../components/Error";
import ContactDetails, { loader as contactDetailLoader } from "../components/ContactDetails";
import ProductDetails from "../components/ProductDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                path: 'about',
                element: <About/>,
            },
            {
                path: 'contact',
                element: <ContactPage/>
            },
            {
                path: 'products',
                element: <Products/>,
                loader: productLoader,
            },
            {
                path: 'products/:id',
                element: <ProductDetails/>,
                loader: productDetailLoader
            }
        ]
    },
    {
        path: 'about',
        element: <About/>,
        children: [
            {
                path: 'vision',
                element: <Vision/>
            },
            {
                path: 'career',
                element: <Career/>
            }
        ]
    },
]);