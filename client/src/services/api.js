import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-crud-1.onrender.com/api/usuarios'});

export default api;
