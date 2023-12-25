import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice"

const AppStore = configureStore(
    {
        reducer: {
            user:useReducer,
           
       } 
    }
)
 export default AppStore