import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptSlice from "./gptSlice";
import configReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptSlice,
    config: configReducer,
  },
});

export default appStore;
