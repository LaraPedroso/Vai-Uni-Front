import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import loginIMg from '../img/login.png';
import { toast } from 'react-toastify';

export default function Login() {

    const style = {
        formulario: {
            'backgroundColor': '#fff',
            'boxShadow': '3px 6px 10px 6px rgba(0, 0, 0, 0.05)',
            'borderRadius': '12px',
            'boxSizing': 'border-box'
        }
    }

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const { authenticated, login } = useContext(AuthContext);

    if (authenticated) {
        return <Navigate to="/" />
    }

    const handleButtonLogin = async (auth) => {
        const data = await login(auth);
        if (data.status === false) {
            toast.error(data.msg, { autoClose: 3000 });
        } else {
            toast.success("Bem-Vindo", { autoClose: 1000 });
        }
    }

    return (
        <div className="d-flex min-vh-100 align-items-center" style={style.fundo}>
            <div className="container col-10 col-sm-7 col-md-6 col-lg-3 p-3 " style={style.formulario}>
                <img src={loginIMg} alt="logo Vou Pra uni" className='m-auto d-block' id='logo' />

                <form className='w-100' onSubmit={handleSubmit(handleButtonLogin)}  >
                    <div className="form-group mb-3">
                        <label htmlFor="Email">Email</label>
                        <input autoFocus type="email" className="form-control" id="Email" {...register('email', { required: true })} aria-describedby="emailHelp" placeholder="Digite seu email" />
                        <small id="emailHelp" className="form-text text-muted">Informe seu email caso ja tenha se cadastrado.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Senha" {...register('password', { required: true })} />
                    </div>

                    <button type='submit' className='mt-3 btn btn-outline-primary w-100'>Entrar</button>
                    <button type='button' className='mt-3 btn btn-outline-danger w-100' onClick={() => navigate('/register')}>Cadastrar-se</button>
                </form>
            </div>
        </div>
    );
}

