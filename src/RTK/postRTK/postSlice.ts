import { createSlice } from "@reduxjs/toolkit";
import { getAllPostAsyncAxios, PostParam } from "./postAsyncThunk";

type PostResult = {
    loading: boolean;
    complete: boolean;
    error: boolean;
    data : PostParam[] | null;
    message : string | null;
}

const initialState : PostResult = {
    loading: false,
    complete: false,
    error: false,
    data : null,
    message : null
};

export const postSlice = createSlice({
    name : 'post',
    initialState,
    reducers: {
        // 동기적 작업 넣는 곳
    },
    extraReducers : builder => {
        builder
            .addCase(getAllPostAsyncAxios.pending, state => {
                state.loading = true;
                state.complete = false;
            })
            .addCase(getAllPostAsyncAxios.fulfilled, (state, action) => {
               state.loading = false;
               state.complete = true;
               state.data = action.payload;
            })
            .addCase(getAllPostAsyncAxios.rejected, (state, action) => {
                state.error = true;
                state.message = action.error.toString(); 
            });
    }
});