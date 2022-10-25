import { useDispatch, useSelector } from "react-redux";
import { getPostsInfo } from "../../actions/posts";

export const usePostData = () => {
  const posts = useSelector((state) => ({ ...state.posts }));

  const dispatch = useDispatch();

  const _getPostsInfo = async () => {
    try {
      const res = await getPostsInfo();
      console.log("inside try", res.data);
        if (res.data) {
          dispatch({
            type: "ADD_POST",
            payload: {
              userData: res.data,
            },
          });
        }
    } catch (err) {
      console.log(err);
    }
  };
  return _getPostsInfo;
};
