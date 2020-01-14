import { createStore, applyMiddleware } from "redux";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk'

const store = createStore(usersReducer, applyMiddleware(thunkMiddleware))

export default store