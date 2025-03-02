import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    preventiveCareReminder : []
}
const PreventiveCareSlice = createSlice({
   name: "preventiveCareReminder",
   initialState,
   reducers:{
    setPreventiveCareReminder(state, action){
        return [
            ...state.preventiveCareReminder,
            ...action.payload
        ]
    }
   }
});

export const {
    setPreventiveCareReminder
} = PreventiveCareSlice.actions;

export default PreventiveCareSlice.reducer;