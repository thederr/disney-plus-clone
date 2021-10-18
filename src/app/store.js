import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";
//setting up the redux store
// redux allows the saving of information on the frontend
export default configureStore({
    reducer:{
        user: userReducer,
        movie:movieReducer
    },
    middleware:getDefaultMiddleware({
        serializableCheck:false,
    }),
});