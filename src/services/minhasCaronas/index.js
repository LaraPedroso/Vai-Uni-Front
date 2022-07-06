import useSWR, { mutate } from "swr";
import { api } from "../api";

const baseUrl = "minhascaronas";

const fetcherGet = () => api.get(`${baseUrl}`).then(resp => resp.data);

const useGetMinhasCaronas = () => {
   const { data, error } = useSWR(`${api.defaults.baseURL}/${baseUrl}`, () => fetcherGet(), { refreshInterval: 5000 });

   return {
      isLoading: !data && !error,
      data: data,
      error
   }
}

const refreshMinhasCaronas = () => {
   mutate(`${api.defaults.baseURL}/${baseUrl}`, () => fetcherGet());
}

const pegarCarona = async (id) => {
   return await api.post(baseUrl, { id });
}

export { useGetMinhasCaronas, refreshMinhasCaronas, pegarCarona };