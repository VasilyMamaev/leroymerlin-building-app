import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import calcReducer from "./calc-reducer";
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
  calc: calcReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store