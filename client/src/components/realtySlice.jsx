import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    realty: [],
    isLoading: false,
    error: null
};

export const fetchRealty = createAsyncThunk(
    'fetchRealty',
    async (type) => {
        const response = await axios.get(`http://localhost:4000/api/get-realtyByType/${type}`);
        console.log(response.data);
        return response.data;
    }
);

export const realtySlice = createSlice({
    name: 'realty',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRealty.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchRealty.fulfilled, (state, action) => {
            state.isLoading = false;
            state.realty = action.payload;
        });
        builder.addCase(fetchRealty.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
});

export default realtySlice.reducer;