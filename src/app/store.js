import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../features/user/userSlice";
//setting up the redux store
// redux allows the saving of information on the frontend
export default configureStore({
    reducer:{
        user:userReducer
    },
    middleware:getDefaultMiddleware({
        serializableCheck:false,
    }),
});