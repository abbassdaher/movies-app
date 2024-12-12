import { applyMiddleware, createStore } from "redux";
import { movieReducer } from "../reducer/reducer";
import { thunk } from "redux-thunk";


export const store = createStore(movieReducer,applyMiddleware(thunk));
