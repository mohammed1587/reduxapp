import {applyMiddleware, combineReducers, createStore} from "redux";
import reducerAddBooks from "./reducerAddBooks";
import thunk from "redux-thunk";
 import bookReducer from "../slices/bookSlice";

const rootReducer = combineReducers({
    library:reducerAddBooks,
    books:bookReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store
