import React from 'react';
import {Link, Navigate, NavLink, Outlet, useNavigate} from 'react-router-dom';
import {s} from "./components/pages/_styles"
import {PATH} from "./routes/Router";
import styles from "../src/components/Site.module.css"


// export const PATH = {
//     ADIDAS: "/adidas",
//     PUMA: "/puma",
//     ABIBAS: "/abibas",
//     ERROR: "/error404",
//     PRICES: "/prices"
// } as const

function App() {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate(-1)
    }

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
                    <s.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></s.NavWrapper>
                    <s.NavWrapper><NavLink to={PATH.PROTECTEDPAGE}>Prodected page</NavLink></s.NavWrapper>
                </s.Nav>
                <s.Content>
                    <div className={styles.HorizontalNavigation}>
                        <Link to={PATH.ADIDAS} className={styles.LinkLikeButton}>Главная страница</Link>
                        <button onClick={navigateHandler} className={styles.ButtonLikeLink}>Назад</button>

                    </div>
                    <Navigate to={PATH.ADIDAS}/>
                    <Outlet/>
                    {/*<Routes>*/}
                    {/*    <Route path="/" element={<Navigate to={PATH.ADIDAS}/>}/>*/}
                    {/*    <Route path={PATH.ADIDAS} element={<Adidas/>}/>*/}
                    {/*    <Route path={PATH.PUMA} element={<Puma/>}/>*/}
                    {/*    <Route path={PATH.ABIBAS} element={<Abibas/>}/>*/}
                    {/*    <Route path={PATH.PRICES} element={<Prices/>}/>*/}

                    {/*    /!*<Route path={'adidas/:id'} element={<Model/>}/> *!/*/}
                    {/*    <Route path={'/:model/:id'} element={<Model/>}/>*/}

                    {/*    /!*<Route path={PATH.ERROR} element={<Error404/>}/>*!/*/}
                    {/*    /!*<Route path="/*" element={<Navigate to={PATH.ERROR}/>}/>  *!/*/}
                    {/*    <Route path="/*" element={<Error404/>}/>*/}
                    {/*</Routes>*/}
                </s.Content>
            </s.Body>
            <s.Footer>abibas 2023</s.Footer>
        </div>
    );
}


export default App;


