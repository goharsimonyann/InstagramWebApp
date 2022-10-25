import axios from "axios";

const config = {
  headers: {
    "Content-Type": "*/*",
    Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`,
  },
};
    
export const getPostsInfo = async () =>
  await axios.get(`${process.env.REACT_APP_API}/posts`);

export const addPost = async (addedPost) =>
  await axios.post(`${process.env.REACT_APP_API}/posts`, addedPost, config);
