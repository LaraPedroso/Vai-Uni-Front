import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { refreshAgendamentoAll } from "../services/agendamento";
import { pegarCarona } from "../services/minhasCaronas";



export default function CardAgendamento({ dados }) {
    const style = {
        horario: {
            height: "50%",
            textAlign: "center",
            margin: "0"
        },
        horario2: {
            textAlign: "center",
            margin: "0",
            marginTop: "revert"
        },
        barra: {
            height: "2em",
            width: "2px",
            backgroundColor: 'black',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        texto: {
            height: "50%",
            margin: "0",
            padding: '0',
        },
        texto2: {
            margin: "0",
            padding: '0',
            marginTop: "revert"
        }
    };
    const pegarCaronaButton = async () => {
        const resp = await pegarCarona(dados.id);

        if (resp.status === 201) {
            toast.success("Carona agendada");
        } else {
            toast.error(resp.data?.erro ?? "Tente novamente mais tarde.");
        }
        refreshAgendamentoAll();

    }
    return (
        <div className="col-sm-6 col-xl-5 col-xxl-3 mb-3">
            <div className="card">
                <div className="card-body p-1">
                    <div className="row">
                        <div className="col-3">
                            <p className="card-title" style={style.horario}>
                                {dados.horasaida}
                            </p>
                            <p className="card-title" style={style.horario2}>
                                {dados.horachegada}

                            </p>

                        </div>
                        <div className="col-1 p-0 m-0 text-center">
                            <i className="bi bi-geo-fill"></i>
                            <div style={style.barra}></div>
                            <i className="bi bi-geo-alt-fill"></i>
                        </div>
                        <div className="col">
                            <p className="card-text" style={style.texto}>{dados.localorigem}</p>
                            <p className="card-text" style={style.texto2}>{dados.localdestino}</p>
                        </div>
                    </div>
                </div>
                <div className="card-footer row justify-content-between m-0 p-1">
                    <div className="row m-0">
                        <div className="col p-0 m-0">
                            <Link to={`perfil/${dados.motoristaId}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                                <span className='ms-2'>{dados.nomeMotorista}</span>
                            </Link>
                        </div>
                        <div className="col-4 m-0 p-0">
                            <p className="text-end">Vagas: {dados.vagas}</p>
                        </div>
                    </div>
                    <div className="row m-0 justify-content-center">
                        <button type="button" className="btn btn-secondary col-7 col-sm-6" onClick={pegarCaronaButton}>Pegar Carona</button>
                    </div>
                </div>
            </div>
        </div >
    );

}