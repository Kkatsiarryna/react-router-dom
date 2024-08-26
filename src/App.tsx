import React, {useState} from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Error404} from "./components/pages/Error404";
import {s} from "./components/pages/_styles"
import {Model} from "./components/pages/Model";

export const PATH = {
    ADIDAS: "/adidas",
    PUMA: "/puma",
    ABIBAS: "/abibas",
    ERROR: "/error404",
} as const

function App() {
    return (
        <div>
            <s.Header><h1>HEADER</h1></s.Header>
            <s.Body>
                <s.Nav>
                    {/*<div><NavLink to={"/pageOne"}*/}
                    {/*              className={({ isActive })=> isActive ? styles.activeNavLink : styles.navLink}>Page1</NavLink> </div>                   */}
                    <s.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></s.NavWrapper>
                    <s.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></s.NavWrapper>
                    <s.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></s.NavWrapper>
                </s.Nav>
                <s.Content>
                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.ADIDAS}/>}/>
                        <Route path={PATH.ADIDAS} element={<Adidas/>}/>
                        <Route path={PATH.PUMA} element={<Puma/>}/>
                        <Route path={PATH.ABIBAS} element={<Abibas/>}/>

                        {/*<Route path={'adidas/:id'} element={<Model/>}/> */}
                        <Route path={'/:model/:id'} element={<Model/>}/>

                        {/*<Route path={PATH.ERROR} element={<Error404/>}/>*/}
                        {/*<Route path="/*" element={<Navigate to={PATH.ERROR}/>}/>  */}
                        <Route path="/*" element={<Error404/>}/>
                    </Routes>
                </s.Content>
            </s.Body>
            <s.Footer>abibas 2023</s.Footer>
        </div>
    );
}


export default App;


