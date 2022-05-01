import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isUpdateSuccess: false,
  isUpdateLoading: false,
  message: "",
};

// Signup jobhunter/recruiter
export const signup = createAsyncThunk(
  "auth/signup",
  async (user, thunkAPI) => {
    try {
      return await authService.signup(user);
    } catch (error) {
      // TODO: Refactor this code
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login jobhunter/recruiter
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    // TODO: Refactor this code
    const message =
      error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Logout jobhunter/recruiter
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, thunkAPI) => {
    try {
      return await authService.updateUser(userData);
    } catch (error) {
      // TODO: Refactor this code
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (thunkAPI) => {
    try {
      return await authService.fetchUser();
    } catch (error) {
      // TODO: Refactor this code
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isUpdateSuccess = false;
      state.isUpdateLoading = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })

      //Update User

      .addCase(updateUser.pending, (state) => {
        // state.isLoading = true;
        state.isUpdateLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.isUpdateLoading = false;
        state.isUpdateSuccess = true;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        // state.isLoading = false;
        state.isUpdateLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Fetch User
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
