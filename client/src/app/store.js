import { configureStore } from "@reduxjs/toolkit";
import realtyReducer from '../components/realtySlice';

export const store = configureStore({
    reducer: {
        realty: realtyReducer
    }
});