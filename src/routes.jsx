import React from "react";
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import Home from './page/home';
import Login from './page/login';
import Cadastro from './page/cadastro';



export default function MainRoutes(){
    return(
        <Router>
            <Routes>
                <Route
                    path="/" element={<Home/>}
                />
                <Route
                    path="login" element={<Login/>}
                />
                <Route
                    path="register" element={<Cadastro/>}
                />
            </Routes>
        </Router>
    )
}