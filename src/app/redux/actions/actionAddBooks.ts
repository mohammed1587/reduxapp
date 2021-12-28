import {ADD_BOOKS, DELETE_ALL_BOOKS, DELETE_BOOKS} from "../reducers/constants";

export const addBook = (data:any) => {
    return {
        type: ADD_BOOKS,
        payload:data
    }
}

export const deleteBook = (id:any) => {
    return {
        type: DELETE_BOOKS,
        payload:id
    }
}
export const deleteAllBook = () => {
    return {
        type: DELETE_ALL_BOOKS,
    }
}
