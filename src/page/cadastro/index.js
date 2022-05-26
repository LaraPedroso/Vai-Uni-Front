import React, { Component } from "react";


export default class Cadastro extends Component {
    render() {
        return (
        <div className="bodyy">
          <form className="container cardPositionRegister bg-light rounded-3">
            <h3 class="h3 mb-3 fw-normal">Cadastro</h3>
            <div >
              <div class="form-floating mt-4">
                  <input type="text" class="form-control" id="floatingInput" placeholder="Nome"/>
              <label for="floatingInput">Nome </label>
              </div>
              <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email </label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Senha</label>
              </div>

              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Confirmação </label>
              </div>

              <div class="checkbox mb-3 mt-4">
                <label>
                  <input type="checkbox" value="remember-me"/> Lembrar
                </label>
              </div>
              <button class="w-100 btn btn-lg btn-dark" type="submit">Entrar</button>
                <p className="forgot-password text-right mb-4">
                    Esqueceu a <a href="#">Senha?</a>
                </p>
            </div>
          </form>
        </div>
        );
    }
}