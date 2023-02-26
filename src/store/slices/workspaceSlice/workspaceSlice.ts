import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { workspaceSliceState } from "./types";
import { workspaceResponseData } from "@/api/types";

const initialState: workspaceSliceState = {
  workspaceData: [],
};

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    workspaces(state, action: PayloadAction<workspaceResponseData[]>) {
      state.workspaceData = action.payload;
    },
    createWorkspaces(state, action: PayloadAction<workspaceResponseData>) {
      state.workspaceData.push(action.payload);
    },
  },
});

export const { workspaces, createWorkspaces } = workspaceSlice.actions;
export default workspaceSlice.reducer;
