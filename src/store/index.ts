import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import configReducer from "./slices/configSlice/configSlice";
// import routeReducer from "./slices/routeSlice/routeSlice";
import authReducer from "./slices/authSlice/authSlice";
import workspaceReducer from "./slices/workspaceSlice/workspaceSlice";

export const store = configureStore({
  reducer: {
    config: configReducer,
    //  routeState: routeReducer,
    auth: authReducer,
    workspaces: workspaceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
