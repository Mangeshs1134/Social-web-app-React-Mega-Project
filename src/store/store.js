import {configureStore} from '@reduxjs/toolkit'
import authReducer from "./authSlice"
import {} from "./authSlice"

const store= configureStore({
    reducer:{
        auth : authReducer,
    }
});



export default store;