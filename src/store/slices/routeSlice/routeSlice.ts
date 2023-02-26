import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import routesList from "@/routes/routesList";
// import { RouteType } from "@/types/routeType";

// type RouteSliceState = {
//     currentState: string;
//     workspaces: RouteType[];
//   isModalOpen: boolean;
// };

// const initialState: RouteSliceState = {
//     currentState: "",
//     workspaces: routesList,
//   isModalOpen: true,
// };

// export const routeSlice = createSlice({
//   name: "appState",
//   initialState,
//   reducers: {
//      setCurrentState: (state, action: PayloadAction<string>) => {
//        state.currentState = action.payload;
//      },
//      addWorkspace: (state, action: PayloadAction<RouteType>) => {
//        state.workspaces.push(action.payload);
//      },
//     openAddWorkspaceModal: (state) => {
//       state.isModalOpen = true;
//     },
//     closeAddWorkspaceModal: (state) => {
//       state.isModalOpen = false;
//     },
//   },
// });

// export const {
//     setCurrentState,
//     addWorkspace,
//   openAddWorkspaceModal,
//   closeAddWorkspaceModal,
// } = routeSlice.actions;

// export default routeSlice.reducer;
