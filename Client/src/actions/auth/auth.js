import axios from "axios";

export const register = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/auth/register`, user);

// export const login = async (user) =>
//     await axios.post(`${process.env.REACT_APP_API}/login`, user);
export const login = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/auth/login`, user);
