// @flow 
import * as React from 'react';
import {ReactNode} from "react";
import {Navigate} from "react-router-dom";
import {PATH} from "./Router";

type Props = {
    children: ReactNode
    
};
export const ProtectedRoute = ({children}: Props) => {
    const logged = false
    return (
        <>
            {logged ? children : <Navigate to={PATH.ERROR}/>}
        </>)


};