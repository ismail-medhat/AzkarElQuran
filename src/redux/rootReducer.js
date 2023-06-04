import {combineReducers} from "@reduxjs/toolkit";
import quranReducer from "./quranSlice";

const rootReducer = combineReducers({
  quran: quranReducer,
});

export default rootReducer;
