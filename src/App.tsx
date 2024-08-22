import React, {useState} from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Error404} from "./components/pages/Error404";
import {s} from "./components/pages/_styles"

const PATH = {
    PAGE1: "/pageOne",
    PAGE2: "/pageTwo",
    PAGE3: "/pageThree",
    ERROR: "/error404"
} as const

function App() {
    return (
        <div>
            <s.Header><h1>HEADER</h1></s.Header>
            <s.Body>
                <s.Nav>
                    {/*<div><NavLink to={"/pageOne"}*/}
                    {/*              className={({ isActive })=> isActive ? styles.activeNavLink : styles.navLink}>Page1</NavLink> </div>                   */}
                    <s.NavWrapper><NavLink to={PATH.PAGE1}>Page1</NavLink></s.NavWrapper>
                    <s.NavWrapper><NavLink to={PATH.PAGE2}>Page2</NavLink></s.NavWrapper>
                    <s.NavWrapper><NavLink to={PATH.PAGE3}>Page3</NavLink></s.NavWrapper>
                </s.Nav>
                <s.Content>
                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>
                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>

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


