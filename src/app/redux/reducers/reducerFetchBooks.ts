import {FETCH_BOOKS_LOADING} from "./constants";

const initialState ={
    isLoading: false,
    fetchBooks:[],
    error:''
}

const reducerFetchBooks = (state=initialState,action:any)=>{
    switch (action.type) {
        case FETCH_BOOKS_LOADING:
            return{
                ...state,
                isLoading: true
            }
        default :
            return state
    }
}

export default reducerFetchBooks
