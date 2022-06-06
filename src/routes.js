import React, { useContext } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Home from './page/Home';
import Login from './page/Login';
import Cadastro from './page/Cadastro';
import { AuthContext, AuthProvider } from "./context/auth";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.min.css';

const PrivateRoute = ({ children }) => {
    const { authenticated } = useContext(AuthContext);
    return authenticated ? children : <Navigate to="/login" />;
};

export default function MainRoutes() {
    const style = {
        fundo: {
            'backgroundColor': 'azure',
        }
    }
    return (
        <Router>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                theme='dark'
            />
            <AuthProvider>
                <div style={style.fundo}>
                    <Routes>
                        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}>
                            <Route path="minhaagenda" element={<h1>Minha pagina</h1>} />
                        </Route>
                        <Route
                            path="login" element={<Login />}
                        />
                        <Route
                            path="register" element={<Cadastro />}
                        />
                        <Route path="*" element={<Navigate to='/' />} />
                    </Routes>
                </div>
            </AuthProvider>
        </Router >
    )
}