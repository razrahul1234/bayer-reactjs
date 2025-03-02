import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    healthtips:[]
}
const HealthTipsSlice = createSlice({
    name:"healthtips",
    initialState,
    reducers: {
        setHealthTips(state, action){
            console.log(action.payload);
           return [
            ...state.healthtips,
            ...action.payload
           ]
        }
    }
})

export const {
  setHealthTips
} = HealthTipsSlice.actions;

export default HealthTipsSlice.reducer;