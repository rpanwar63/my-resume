import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
type StyleProps = {
  viewFlipped: boolean;
};
const STYLES_INITIAL_DATA: StyleProps = {
  viewFlipped: false,
};
export const stylesSlice = createSlice({
  name: "styles",
  initialState: STYLES_INITIAL_DATA,
  reducers: {
    toggleFlipView: state => {
      state.viewFlipped = !state.viewFlipped;
    },
  },
  selectors: {
    styles: data => data,
  },
});
export const { toggleFlipView } = stylesSlice.actions;
export const { styles } = stylesSlice.selectors;
