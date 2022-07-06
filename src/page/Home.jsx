import React from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import CardAgendamento from "../components/CardAgendamento";
import { useGetAgendamentoAll, refreshAgendamentoAll } from "../services/agendamento";

export default function Home() {

    let [searchParams, setSearchParams] = useSearchParams();

    let user = searchParams.get("search");

    const { register, handleSubmit } = useForm();

    const handleSearch = (data) => {
        if (!data.search) {
            setSearchParams({});
        } else {
            setSearchParams(data);
        }
        refreshAgendamentoAll(data);
    }

    const { data } = useGetAgendamentoAll({ search: user });
    
    return (
        <>
            <div className="row justify-content-center">
                <form className="col-sm-8 col-md-5" onSubmit={handleSubmit(handleSearch)}>
                    <div className="input-group mb-3">
                        <input type="search" {...register('search', { value: user })} className="form-control" placeholder="Buscar" />
                        <button className="btn btn-success" type="submit">Buscar</button>
                    </div>
                </form>
            </div>

            <div className="row m-1">
                {
                    data?.length ? data.map((e) => <CardAgendamento key={e.id} dados={e} />) : <h4 className="text-center mt-5">Nenhuma Carona disponivel</h4>
                }
            </div>
        </>
    )
}

