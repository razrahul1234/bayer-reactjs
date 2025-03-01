import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : {
        firstName:"rahul"
    }
}

const UserSlice = createSlice({
    name : "users",
    initialState,
    reducers : {
        setUser(state, action){
           return {
            ...state.user,
            ...action.payload
           }
        },
        logOutUser(state, action){
           return {}
        }
    }
})

export const {setUser, logOutUser} = UserSlice.actions;

export default UserSlice.reducer;