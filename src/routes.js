import React, { useContext } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Home from './page/home';
import Login from './page/login/index.jsx';
import Cadastro from './page/cadastro';
import { AuthContext, AuthProvider } from "./context/auth";

const PrivateRoute = ({ children }) => {
    const { authenticated } = useContext(AuthContext);
    return authenticated ? children : <Navigate to="/login" />;
};

export default function MainRoutes() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route
                        path="/" element={
                            <PrivateRoute><Home /></PrivateRoute>}
                    />
                    <Route
                        path="login" element={<Login />}
                    />
                    <Route
                        path="register" element={<Cadastro />}
                    />
                </Routes>
            </AuthProvider>
        </Router>
    )
}