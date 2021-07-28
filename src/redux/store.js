import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const initialState = { value: 0 };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "root/incremented":
      return { value: state.value + 1 };
    case "root/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export default createStore(rootReducer, composeWithDevTools());
