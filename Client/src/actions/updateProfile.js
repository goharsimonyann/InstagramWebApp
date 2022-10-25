import axios from "axios";

const config = {
  headers: {
    "Content-Type": "*/*",
    Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`,
  },
};

export const updateProfile = async (user, id) =>
  await axios.put(`${process.env.REACT_APP_API}/users/${id}`, user, config);
  
export const getUserInfo = async (id) =>
  await axios.get(`${process.env.REACT_APP_API}/users/${id}`, config);
