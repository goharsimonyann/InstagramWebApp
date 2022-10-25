let userState = window.localStorage.getItem("auth")
? JSON.parse(window.localStorage.getItem("auth"))
: null;

export const authReducer = (state = userState, action) => {
    switch (action.type){
        case "LOGGED_IN_USER":
            return {...state, ...action.payload};
        case "LOGOUT":
            return action.payload;
        default:
            return state;
    }
}