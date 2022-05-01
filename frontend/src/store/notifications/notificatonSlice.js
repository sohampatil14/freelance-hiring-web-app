import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import notificationService from "./notificationService";

const initialState = {
  notifications: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Fetch JobHunters
export const getNotifications = createAsyncThunk(
  "notifications/fetch",
  async (thunkAPI) => {
    try {
      return await notificationService.getNotifications();
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Fetch JobHunter
export const addNotifications = createAsyncThunk(
  "notifications/add",
  async (data, thunkAPI) => {
    try {
      return await notificationService.addNotification(data);
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const notificationSlice = createSlice({
  name: "notifcations",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    appendNotication: (state, action) => {
      state.notifications = [action.payload, ...state.notifications];
    },

    setNewNotificationsToFalse: (state) => {
      state.notifications = state.notifications.map((el) => {
        if (el?.new) {
          el.new = false;
        }
        return el;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotifications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNotifications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.notifications = action.payload;
      })
      .addCase(getNotifications.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Signle JobHunter

      .addCase(addNotifications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNotifications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addNotifications.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, appendNotication, setNewNotificationsToFalse } =
  notificationSlice.actions;
export default notificationSlice.reducer;
