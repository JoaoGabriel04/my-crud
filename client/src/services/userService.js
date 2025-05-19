import api from './api';

export const getUsers = () => {
  return api.get('/');
};

export const createUser = (user) => {
  return api.post('/', user);
};

export const updateUser = (user) => {
  return api.put(`/${user._id}`, user);
};

export const deleteUser = (id) => {
  return api.delete(`/${id}`);
};