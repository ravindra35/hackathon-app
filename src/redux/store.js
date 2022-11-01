import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./users/userSlice";
import PostReducer from "./posts/postSlice";



export const store = configureStore({
  reducer: {   
    userData: UserReducer,
    postData:PostReducer
  },
});
