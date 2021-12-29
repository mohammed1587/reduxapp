import { createSlice } from '@reduxjs/toolkit';
import {fetchBooks} from "../thunks/thunksFetchBooks";
import {API_STATUS_FAILED, API_STATUS_LOADING, API_STATUS_SUCCESS} from "../constants";



const reducerFetchBook = createSlice({
    name: 'books',
    initialState:{
        list: [],
        status: '',
        error:''
    },
    reducers: {
        // omit reducer cases
    },
    extraReducers: builder => {
        builder
            .addCase(fetchBooks.pending, (state, action) => {
                state.status = API_STATUS_LOADING
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
               state.list = action.payload
                state.status = API_STATUS_SUCCESS
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = API_STATUS_FAILED
                state.error = action.error.message || ''
               })
    }
})

export default reducerFetchBook.reducer;
