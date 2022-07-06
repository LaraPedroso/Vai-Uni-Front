import React from 'react';
import CardMinhaCarona from '../components/CardMinhasCaronas';
import ModalAddCarona from '../components/ModalAddCarona';
import { useGetMinhasCaronas } from '../services/minhasCaronas';

function MinhasCaronas() {

    const { data } = useGetMinhasCaronas();
    return <>
        <ModalAddCarona />
        <div className="row m-0">
            <div className="col">
                <h3>Minhas Caronas</h3>
            </div>
            <div className='col text-end'>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AddCarona">
                    <i className="bi bi-plus-lg"></i>
                    <span className='ms-1'>Novo</span>
                </button>
            </div>
        </div>
        <div className="row m-1">
            <div className="col-12 mb-2 col-sm-6">
                <div className="card p-2">
                    <h4 className='text-center'>Caronas</h4>
                    <h6>Caronas feitas: {data?.NcaronasFeitas}</h6>
                    <h6>Caronas pegas: {data?.NcaronasPegas}</h6>
                </div>
            </div>
            <div className="col-12 col-sm-6">
                {
                    data?.caronas?.map((e) => <CardMinhaCarona key={e.id} dados={e} />)
                }
            </div>
        </div>
    </>;
}

export default MinhasCaronas;