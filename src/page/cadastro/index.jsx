import React, { useContext } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/auth';
import loginIMg from '../../img/login.png';
import InputMask from 'react-input-mask';

function Login() {
    const { register, handleSubmit, control } = useForm();

    const navigate = useNavigate();

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
        <div className="d-flex min-vh-100 align-items-center fundo">
            <div className="container col-10 col-sm-7 col-md-6 col-lg-3 formulario p-3 ">
                <img src={loginIMg} alt="logo Vou Pra uni" className='m-auto d-block' id='logo' />

                <form className='w-100' onSubmit={handleSubmit(handleButtonLogin)}  >
                    <div className="form-group mb-3">
                        <label htmlFor="Nome">Nome</label>
                        <input autoFocus type="text" className="form-control"  {...register('nome', { required: true })} aria-describedby="nomeHelp" placeholder="Digite seu Nome" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="CPF">CPF</label>
                        <Controller
                            as={InputMask}
                            mask="999.999.999-99"
                            name="cpf"
                            control={control}
                        />
                        <input type="text" className="form-control"   {...register('cpf', { required: true })} placeholder="Digite seu CPF" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="Email">Email</label>
                        <input type="email" className="form-control" {...register('email', { required: true })} placeholder="Digite seu email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" placeholder="Senha" {...register('password', { required: true, minLength: 6 })} />
                    </div>

                    <button type='submit' className='mt-3 btn btn-outline-primary w-100'>Cadastrar-se</button>
                    <button type='button' className='mt-3 btn btn-outline-danger w-100' onClick={() => navigate('/login')}>Voltar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;