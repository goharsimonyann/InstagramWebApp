import axios from "axios";

const config = {
  headers: {
    "Content-Type": "*/*",
    Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`,
  },
};

// export const getFollowers = async () =>
//   await axios.get(`${process.env.REACT_APP_API}/users`);

export const addFollow = async (id) =>
  await axios.post(
    `${process.env.REACT_APP_API}/users/user/${id}/follow`,
    id,
    config
  );
