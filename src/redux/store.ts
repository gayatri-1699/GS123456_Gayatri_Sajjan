import {configureStore } from '@reduxjs/toolkit';
import storeReducer from './storeSlice';

const store = configureStore ({
    reducer : {
        store : storeReducer
    }
}) ;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;