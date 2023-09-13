import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Vision from "../components/Vision";
import Career from "../components/Career";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'contact',
                element: <Contact/>
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
            }
        ]
    },
    {
        path: 'contact',
        element: <Contact/>,
        children: [
            {
                path: 'career',
                element: <Career/>
            }
        ]
    },
    {
        path: 'vision',
        element: <Vision/>
    }
    
]);