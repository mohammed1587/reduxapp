import {ADD_BOOKS} from "../reducers/constants";

export const addBook = (data:any) => {
    return {
        type: ADD_BOOKS,
        payload:data
    }
}
