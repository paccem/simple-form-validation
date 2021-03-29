import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    userRegData:[],
    userRegistered: false,
    isLogged: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        userRegistration: (state, action) => {
            state.userRegData.push(action.payload)
        },
        userRegistered: state  => {
            state.userRegistered = true 
        },
        userLoggedIn: state => {
            state.isLogged = true
        },
        
    }
})

export default userSlice.reducer
export const {userRegistration, userLoggedIn, userRegistered } = userSlice.actions