import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/auth';
import './style.css';

function Login() {
    const { register, handleSubmit } = useForm();

    const { authenticated, login } = useContext(AuthContext);

    if (authenticated) {
        return <Navigate to="/" />
    }

    const handleButtonLogin = async (auth) => {
        const data = await login(auth);
        if (data.status === false) {
            toast.error(data.result, { autoClose: 3000 });
        } else {
            toast.success("Bem-Vindo", { autoClose: 1000 });
        }
    }

    return (
        <div className="d-flex min-vh-100 align-items-center">
            <div className="container col-8 col-sm-5 formulario">
                <form className='w-100' onSubmit={handleSubmit(handleButtonLogin)}  >
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="usuario" placeholder="Usuario"  {...register('user')} />
                        <label htmlFor="usuario">Usuario</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="password" placeholder="Password" {...register('password')} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type='submit' className='mt-3 btn btn-outline-primary w-100'>Entrar</button>
                    <button type='submit' className='mt-3 btn btn-outline-danger w-100'>Cadastrar-se</button>
                </form>
            </div>
        </div>
    );
}

export default Login;