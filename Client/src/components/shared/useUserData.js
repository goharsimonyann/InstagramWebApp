import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../actions/updateProfile";

export const useUserData = () => {
  const profile = useSelector((state) => ({ ...state.profile }));
  console.log("useuserdata", profile);

  const dispatch = useDispatch();

  const _getUserInfo = async () => {
    try {
      const res = await getUserInfo(profile.id);
      console.log("inside try", res.data);
      if (res.data) {
        dispatch({
          type: "UPDATE_PROFILE",
          payload: {
            userData: res.data,
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return _getUserInfo;
};
