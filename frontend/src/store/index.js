import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import projectReducer from "./projects/projectSlice";
import jobHunterReducer from "./jobHunters/jobHunterSlice";
import jobHunterProjectsReducer from "./JobHunterProjects/projectSlice";
import notificationsReducer from "./notifications/notificatonSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer,
    jobHunters: jobHunterReducer,
    jobHunterProjects: jobHunterProjectsReducer,
    notifications: notificationsReducer,
  },
});
