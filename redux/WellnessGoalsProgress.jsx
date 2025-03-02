import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wellnessGoalsProgress : []
}
const WellnessGoalsProgressSlice = createSlice({
   name: "wellnessGoalsProgress",
   initialState,
   reducers:{
    setWellnessGoalsProgress(state, action){
        return [
            ...state.wellnessGoalsProgress,
            ...action.payload
        ]
    }
   }
});

export const {
    setWellnessGoalsProgress
} = WellnessGoalsProgressSlice.actions;

export default WellnessGoalsProgressSlice.reducer;