import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { profileReducer } from "./profile";
import { postReducer } from "./posts";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  posts: postReducer,
});

export default rootReducer;
