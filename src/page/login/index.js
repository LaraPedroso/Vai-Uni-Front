import React, { Component } from "react";


export default class Login extends Component {
    render() {
        return (
            <div className="bodyy">
                <form className="container bg-light cardPosition rounded-3">
                    <h3 class="h3 mb-3 fw-normal">Login</h3>
                    <div class="form-floating mt-2">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email </label>
                    </div>
                    <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Senha</label>
                    </div>

                    <div class="checkbox mb-3 mt-4">
                    <label>
                        <input type="checkbox" value="remember-me"/> Lembrar
                    </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-dark mt-3" type="submit">Entrar</button>
                        <p className="forgot-password text-right mb-4 mt-3">
                            Esqueceu a <a href="#">Senha?</a>
                        </p>
                </form>
            </div>
        );
    }
}