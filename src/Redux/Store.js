import { configureStore } from '@reduxjs/toolkit'
import DataReducer from './DataReducer'
import { fetchData } from '../API/FetchData'
export const Store = configureStore({
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(fetchData.middleware).concat(fetchData.middleware),
        reducer:{
            dataReducer : DataReducer,
            [fetchData.reducerPath]:fetchData.reducer,
        }
})