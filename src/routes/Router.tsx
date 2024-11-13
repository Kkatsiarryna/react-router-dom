import * as React from "react";
import {
    createBrowserRouter, Navigate,
} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedRoute} from "./ProtectedRoute";



export const PATH = {
    ADIDAS: "/adidas",
    PUMA: "/puma",
    ABIBAS: "/abibas",
    ERROR: "/error404",
    PRICES: "/prices",
    MODEL: "/:model/:id",
    PROTECTEDPAGE: "/protectedpage"
} as const


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
       // errorElement: <Error404/>,
        errorElement:  <Navigate to={PATH.ERROR}/>,
        children: [
            {
                path: PATH.ADIDAS,
                element: <Adidas/>,
            },
            {
                path: PATH.PUMA,
                element: <Puma/>,
            },
            {
                path: PATH.ABIBAS,
                element: <Abibas/>,
            },
            {
                path: PATH.PRICES,
                element: <Prices/>,
            },
            {
                path: PATH.MODEL,
                element: <Model/>,
            },
            {
                path: PATH.PROTECTEDPAGE,
                element: (
                    <ProtectedRoute>
                        <ProtectedPage/>
                    </ProtectedRoute>
                ),
            },
            {
                path: PATH.ERROR,
                element: <Error404/>,
            },
        ]
    },
]);