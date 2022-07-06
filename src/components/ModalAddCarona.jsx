import React from 'react';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { criarAgendamento } from '../services/agendamento';
import { refreshMinhasCaronas } from '../services/minhasCaronas';

function ModalAddCarona() {

    const { register, handleSubmit, reset } = useForm();

    const handleCriarCarona = async (dados) => {
        console.log(dados)
        const resp = await criarAgendamento(dados);
        if (resp.status === 201) {
            document.getElementById('closeAddCarona').click();
            refreshMinhasCaronas();
            toast.success("Agendado com sucesso");
            reset()
        } else {
            toast.error(resp.data?.erro ?? "Erro ao cadastrar, tente novamente mais tarde!" );
        }
    }

    return <>
        <div className="modal fade" id="AddCarona" tabIndex="-1" aria-labelledby="AddCaronaLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="AddCaronaLabel">Criar Carona</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="row g-3" onSubmit={handleSubmit(handleCriarCarona)} >
                            <div className="col-12">
                                <label htmlFor="inputLocalSaida" className="form-label">Local de Saida</label>
                                <input type="text" className="form-control" id="inputLocalSaida" {...register('localorigem', { required: true })} placeholder="Bairro, rua..." />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputDataSaida" className="form-label">Data Saida</label>
                                <input type="date" className="form-control" id="inputDataSaida" min={
                                    new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0]
                                } {...register('datasaida', { required: true })} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputHoraSaida" className="form-label">Hora Saida</label>
                                <input type="time" className="form-control" id="inputHoraSaida" {...register('horasaida', { required: true, min: '00:00' })} />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputLocalChegada" className="form-label">Local de Chegada</label>
                                <input type="text" className="form-control" id="inputLocalChegada" {...register('localdestino', { required: true })} placeholder="Faculdade, Bairro..." />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputDataChegada" className="form-label">Data Chegada</label>
                                <input type="date" className="form-control" id="inputDataChegada" min={
                                    new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0]
                                } {...register('datachegada', { required: true })} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputHoraChegada" className="form-label">Hora Saida</label>
                                <input type="time" className="form-control" id="inputHoraChegada" {...register('horachegada', { required: true })} />
                            </div>
                            <div className="col-3">
                                <label htmlFor="inputVagas" className="form-label">Vagas</label>
                                <input type="number" {...register('vagas', { required: true, valueAsNumber: true })} className="form-control" id="inputVagas" min={1} max={4} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id='closeAddCarona'>Cancelar</button>
                                <button type="submit" className="btn btn-primary">Criar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default ModalAddCarona;