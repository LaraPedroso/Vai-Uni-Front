import useSWR from "swr";
import { api } from "../api";

const baseUrl = "/veiculos";

const fetcherGetAll = (params) => api.get(`${baseUrl}`).then(resp => resp.data);
const useGetAll = () => {
    const { data, error } = useSWR(`${baseUrl}`, fetcherGetAll());
    return {
        isLoading: !data && !error,
        data: data?.result,
        error
    }
}

export { useGetAll };