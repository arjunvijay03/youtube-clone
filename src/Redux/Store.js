import { configureStore } from '@reduxjs/toolkit'
import DataReducer from './DataReducer'

export const Store = configureStore({
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
        reducer:{
            dataReducer : DataReducer,
        }
})