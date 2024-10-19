import axios from 'axios';

const api = axios.create({
  baseURL: 'https://angular-api.xwhost.com.br/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});


export default api;
