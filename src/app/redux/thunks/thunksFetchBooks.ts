import {createAsyncThunk} from "@reduxjs/toolkit";
import booksService from "../services/BooksService";

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (payload:any,{rejectWithValue,getState,dispatch}) => {
        return await (booksService.book.fetchBooks(payload.title)
         ).then((res:any) => res.data.items);

    }
);
