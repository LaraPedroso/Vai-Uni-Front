import { useContext } from "react";
import React, { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth";

export default function Navbar() {
    const style = {
        button: {
            'border': 'none',
        },
        content: {
            'minWidth': '90vw',
            'minHeight': '90vh',
        }
    }

    const { logout, userId } = useContext(AuthContext);

    return (<>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Vou Pra Uni</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end text-end" id="navbarsExample03">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="btn btn-outline-light" style={style.button} to="/">Caronas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-outline-light" style={style.button} to="/minhascaronas">Minhas Caronas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-outline-light" style={style.button} to={`/perfil/${userId()}`}>Meu Perfil</Link>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-light" style={style.button} onClick={logout}>Sair</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container-md shadow p-3 mb-5 bg-white rounded mt-3" style={style.content}>
            <Outlet />
        </div>
    </>
    )

}