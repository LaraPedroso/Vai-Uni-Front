import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, createSession } from '../services/api';

import jwt_decode from "jwt-decode";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const [token, setToken] = useState(localStorage.getItem('token'));

    const validarToken = () => {
        if (!token) {
            return false;
        }
        api.defaults.headers.Authorization = `Bearer ${token}`;
        try {

            let decoded = jwt_decode(token);

            if (!decoded.exp) {
                return false;
            }

            if (new Date(decoded.exp * 1000) > new Date()) {
                return true;
            } else {
                removeToken();
                return false;
            }
        } catch (err) {
            removeToken();
            return false;
        }
    }

    const login = async (auth) => {
        try {
            const { status, data } = await createSession(auth);

            const tokenSession = data.token;

            if (status === 200) {
                localStorage.setItem('token', tokenSession);

                setToken(tokenSession);



                api.defaults.headers.Authorization = `Bearer ${tokenSession}`;
            }
            return data;
        } catch (e) {
            return { status: false, msg: e?.response?.data };
        }

    };

    const logout = () => {
        removeToken();
        navigate('/login');
    }

    function removeToken() {
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = null;
        setToken(null);
    }

    const userId = () => {
        const tokenSession = localStorage.getItem('token');

        let decoded = jwt_decode(tokenSession);

        return decoded.userId;
    }

    return (
        <AuthContext.Provider value={{ authenticated: validarToken(), userId, token, setToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}