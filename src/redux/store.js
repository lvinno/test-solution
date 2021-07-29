import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { SET_USER_PROFILE, RESET_USER_PROFILE } from "./actions";
export const initialState = {
  givenName: "",
  surname: "",
  email: "",
  phone: "",
  houseName: "",
  street: "",
  suburb: "",
  state: "",
  postcode: "",
  country: "",
  avatar: null,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_PROFILE:
      return { ...state, ...action.payload };
    case RESET_USER_PROFILE:
      return { ...initialState };
    default:
      return state;
  }
}

export default createStore(rootReducer, composeWithDevTools());
