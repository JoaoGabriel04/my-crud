import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-crud-unc9.onrender.com/api/usuarios'});

export default api;
