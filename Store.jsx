import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/UserSlice";
import healthTipsReducer from "./redux/HealthTipsSlice";
import preventiveCareReminderReducer from "./redux/PreventiveCareReminderSlice";
import wellnessGoalsProgressReducer from "./redux/WellnessGoalsProgress";

const Store = configureStore({
    reducer:{
        user : userReducer,
        healthTips: healthTipsReducer,
        preventiveCareReminder: preventiveCareReminderReducer,
        wellnessGoalsProgress : wellnessGoalsProgressReducer
    }
})

export default Store;