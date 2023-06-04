import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {
  Api_getData,
} from "../constants/ApiConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  quranStopIndex:0,
  token: null,
  user: null,
  loading: false,
  error: null,
};



export const getUserLoginData = createAsyncThunk(
  "auth/getUserLoginData",
  async (params, {rejectWithValue}) => {
    try {
      const response = await axios.post(Api_getData, params);
      console.log("User Register data : " + JSON.stringify(response.data));

      const res = response.data;
      if (res.user) {
        await AsyncStorage.setItem("@userData", JSON.stringify(res.user));
        await AsyncStorage.setItem("@fid", JSON.stringify(res.user.FID));
        await AsyncStorage.setItem("@token", JSON.stringify(res.token));
      }
      return res;
    } catch (error) {
      console.log("getUserLoginData Axios Error: " + JSON.stringify(error));
      return rejectWithValue("هناك خط فى العوان");
    }
  },
);




const quranSlice = createSlice({
  name: "quran",
  initialState: initialState,
  reducers: {
    SetQuranStopIndex: (state,action) => {
      state.quranStopIndex = action.payload;
    },
  },
  extraReducers: builder => {
    // start get user data reducer block
    builder.addCase(getUserLoginData.pending, state => {
      state.loading = true;
    });
    builder.addCase(getUserLoginData.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.error_message) {
        state.error = action.payload.error_message;
      } else {
        state.user = action.payload.user;
        state.token = action.payload.token;
      }
    });
    builder.addCase(getUserLoginData.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.token = null;
      state.error = action.payload;
    });
    // end get user data reducer block
  },
});

export const {SetQuranStopIndex} = quranSlice.actions;

export default quranSlice.reducer;
