import axios from "axios";
const config = {
  headers: {
    "Content-Type": "*/*",
    Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`,
  },
};
export const getUsers = async () =>
  await axios.get(`${process.env.REACT_APP_API}/users`, config);
