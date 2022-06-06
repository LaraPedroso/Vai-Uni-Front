import axios from "axios";


export const api = axios.create({
  baseURL: `http://localhost:3001/api`,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const createSession = (dados) => {
  return api.post('/login', {}, { auth: { username: dados.email, password: dados.password } });
}
