import { createStore, applyMiddleware, compose } from "redux";
import notesReducer from "./reducers/notesReducer";
import thunk from "redux-thunk";

const middleWare = applyMiddleware(thunk);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(notesReducer, composeEnhancer(middleWare));

export default store;
