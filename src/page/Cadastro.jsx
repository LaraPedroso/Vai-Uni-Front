import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/auth';
import loginIMg from '../img/login.png';
import InputMask from "react-input-mask";

function Cadastro() {
    const { register, handleSubmit } = useForm();

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
    const style = {
        formulario: {
            'backgroundColor': '#fff',
            'boxShadow': '3px 6px 10px 6px rgba(0, 0, 0, 0.05)',
            'borderRadius': '12px',
            'boxSizing': 'border-box'
        }
    }

    return (
        <div className="d-flex min-vh-100 align-items-center">
            <div className="container col-10 col-sm-7 col-md-6 col-lg-5 col-xl-3 p-3" style={style.formulario}>

                <img src={loginIMg} alt="logo Vou Pra uni" className='m-auto d-block col-9 col-lg-6' id='logo' />

                <form className='w-100' onSubmit={handleSubmit(handleButtonLogin)}  >
                    <div className="form-group mb-3">
                        <label htmlFor="Nome">Nome</label>
                        <input autoFocus type="text" className="form-control"  {...register('nome', { required: true })} aria-describedby="nomeHelp" placeholder="Digite seu Nome" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="cpf">CPF</label>

                        <InputMask
                            type="text"
                            id='cpf'
                            {...register('cpf', { required: true })}
                            mask="999.999.999-99"
                            className="form-control"
                            placeholder='Digite seu CPF'
                        />

                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="whatsapp">WhatsApp</label>

                        <InputMask
                            type="tel"
                            {...register('whatsapp')}
                            mask="(99) 99999-9999"
                            className="form-control"
                            placeholder='Digite seu WhatsApp'
                        />

                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="Email">Email</label>
                        <input type="email" className="form-control" {...register('email', { required: true })} placeholder="Digite seu email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" placeholder="Senha" {...register('password', { required: true, minLength: 6 })} />
                        <div className="form-text">Informe no minimo 6 caracteres</div>
                    </div>

                    <button type='submit' className='mt-3 btn btn-outline-primary w-100'>Cadastrar-se</button>
                    <button type='button' className='mt-3 btn btn-outline-danger w-100' onClick={() => navigate('/login')}>Voltar</button>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;