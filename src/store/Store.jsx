import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/AuthSliceReducer'
import productReducer from "../features/ProductSliceReducer"
import userReducer from "../features/UsersSliceReducer"

export const store = configureStore({
    reducer:{
        auth:authReducer,
        products:productReducer,
        users:userReducer
    }
})