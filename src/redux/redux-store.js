import { createStore, combineReducers, compose } from "redux";
import calcReducer from "./calc-reducer";

let rootReducer = combineReducers({
  calc: calcReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(rootReducer, composeEnhancers())

export default store