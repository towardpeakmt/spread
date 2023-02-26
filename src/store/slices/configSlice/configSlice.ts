import { createSlice } from "@reduxjs/toolkit";
import { colors } from "@/theme/colors/colors";
import { configSliceState, Lang } from "./types";

const initialState: configSliceState = {
  lang: Lang.en,
  colors: colors,
};

export const configSlice = createSlice({
  name: "crmSettings",
  initialState,
  reducers: {},
});

// export const {} = sheetsCounter.actions;

export default configSlice.reducer;
