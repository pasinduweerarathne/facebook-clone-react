import { createStore } from "redux";
import { userReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(userReducer, composeWithDevTools());

export default store;
