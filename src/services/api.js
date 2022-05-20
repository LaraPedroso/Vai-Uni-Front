import axios from "axios";


export const api = axios.create({
  baseURL: `localhost:3001/api`,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const createSession = async (dados) => {
  return api.post('/login', { auth: { username: dados.user, password: dados.password } });
}
