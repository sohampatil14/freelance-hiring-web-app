import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jobHunterService from "./jobHunterService";

const initialState = {
  users: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  singleUser: {},
  message: "",
};

// Fetch JobHunters
export const fetchJobHunters = createAsyncThunk(
  "jobHunters/fetch",
  async (filterData, thunkAPI) => {
    try {
      return await jobHunterService.fetchJobHunters(filterData);
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Fetch JobHunter
export const fetchJobHunter = createAsyncThunk(
  "singleJobHunter/fetch",
  async (id, thunkAPI) => {
    try {
      return await jobHunterService.fetchJobHunter(id);
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const jobHunterSlice = createSlice({
  name: "jobHunter",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.users = [];
      state.singleUser = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobHunters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobHunters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(fetchJobHunters.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.users = [];
      })

      // Signle JobHunter

      .addCase(fetchJobHunter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobHunter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleUser = action.payload;
      })
      .addCase(fetchJobHunter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.singleUser = {};
      });
  },
});

export const { reset } = jobHunterSlice.actions;
export default jobHunterSlice.reducer;
