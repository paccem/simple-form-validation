import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userRegSlice'


export default configureStore({
    reducer: {
      user: userReducer,
    }
})
