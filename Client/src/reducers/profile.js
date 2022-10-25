const profileState = window.localStorage.getItem("auth")
  ? JSON.parse(window.localStorage.getItem("auth")).user
  : null;

export const profileReducer = (state = profileState, action) => {
  switch (action.type) {
    case "UPDATE_PROFILE":
      return { ...action.payload.userData };
    default:
      return state;
  }
};
