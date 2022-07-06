import React, { useContext } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/auth";
import Navbar from "./page/Navbar";
import Home from './page/Home';
import Login from './page/Login';
import Cadastro from './page/Cadastro';
import MinhasCaronas from "./page/MinhasCaronas";


const PrivateRoute = ({ children }) => {
    const { authenticated } = useContext(AuthContext);
    return authenticated ? children : <Navigate to="/login" />;
};

export default function MainRoutes() {

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={
                        <PrivateRoute>
                            <Navbar />
                        </PrivateRoute>
                    }>
                        <Route path="/" element={<Home />} />
                        <Route path="/minhascaronas" element={<MinhasCaronas />} />
                        <Route path="/perfil/:id" element={<h1>Perfil</h1>} />
                    </Route>
                    <Route
                        path="login" element={<Login />}
                    />
                    <Route
                        path="register" element={<Cadastro />}
                    />
                    <Route path="*" element={<Navigate to='/' />} />
                </Routes>
            </AuthProvider>
        </Router >
    )
}