import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
//setting up the redux store
// redux allows the saving of information on the frontend
export default configureStore({
    reducer:{},
    middleware:getDefaultMiddleware({
        serializableCheck:false,
    }),
});