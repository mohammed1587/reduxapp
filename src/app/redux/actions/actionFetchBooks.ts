import {FETCH_BOOKS_ERROR, FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS} from "../reducers/constants";

const fetchBooksLoading = () =>{
    return{
        type:FETCH_BOOKS_LOADING
    }
}

const fetchBooksSuccess = (data:any) =>{
    return{
        type:FETCH_BOOKS_SUCCESS,
        payload:data
    }
}

const fetchBooksError = (error:any) =>{
    return{
        type:FETCH_BOOKS_ERROR,
        payload:error

    }
}

export const fetchBooks = (title:any) =>{
    return (dispatch:any)=>{

    }
}
