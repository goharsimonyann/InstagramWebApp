let postState = [];

export const postReducer = (state = postState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, ...action.payload.userData.posts];

    default:
      return state;
  }
};
