import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { resumeDataSlice } from "./slices/DataSlice";
import { stylesSlice } from "./slices/StylesSlice";

const rootReducer = combineSlices(resumeDataSlice, stylesSlice);
export type RootState = ReturnType<typeof rootReducer>;
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat();
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
