import { api } from './api';

const baseUrl = "cadastro";

const cadastro = async (data) => {
    try {
        const dados = (await api.post(`${baseUrl}`, data)).data;
        return dados;
    } catch (e) {
        return e?.response?.data;
    }

}

export { cadastro };