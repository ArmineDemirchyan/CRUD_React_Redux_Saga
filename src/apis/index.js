import axios from "axios";
axios.defaults.baseURL = process.env.REACT_API_URL;
export const getUsers = async () => await axios.get('/users');
export const createUser = async () => await axios.post(`/user`);
export const getUser = async (id) => await axios.get(`/user/${id}`);
export const updateUser = async (id) => await axios.patch(`/user/${id}`);
export const deleteUser = async (id) => await axios.delete(`/user/${id}`);


