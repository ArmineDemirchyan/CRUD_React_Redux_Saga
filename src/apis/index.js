import axios from "axios";

axios.defaults.baseURL = "http://localhost:7000/api";
export const getUsers = async () => await axios.get(`/users`);
export const addUser = async (user) => await axios.post(`/user`, user);
export const getUser = async (id) => await axios.get(`/user/${id}`);
export const editUser = async (user) => await axios.patch(`/user/${user.id}`, user);
export const deleteUser = async (id) => await axios.delete(`/user/${id}`);


