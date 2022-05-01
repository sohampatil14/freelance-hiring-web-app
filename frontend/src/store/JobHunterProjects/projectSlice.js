import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectService from "./projectService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  isUpdateLoading: false,
  isUpdateSuccess: false,
  isDeleteLoading: false,
  isDeleteSuccess: false,
  myProjects: [],
  message: "",
};

// Fetch Projects
export const fetchMyProjects = createAsyncThunk(
  "myProjects/fetch",
  async (filterData, thunkAPI) => {
    try {
      return await projectService.fetchMyProjects(filterData);
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateProject = createAsyncThunk(
  "myProjects/update",
  async (projectData, thunkAPI) => {
    try {
      return await projectService.updateMyProject(projectData);
    } catch (error) {
      // TODO: Refactor this code
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const projectSlice = createSlice({
  name: "myProjects",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.isUpdateLoading = false;
      state.isUpdateSuccess = false;
      state.isDeleteLoading = false;
      state.isDeleteSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMyProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.myProjects = action.payload;
      })
      .addCase(fetchMyProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Update Project
      .addCase(updateProject.pending, (state) => {
        state.isUpdateLoading = true;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        const index = state.myProjects.findIndex(
          (el) => el._id === action?.payload?._id
        );

        state.myProjects[index] = action.payload;

        state.isUpdateLoading = false;
        state.isUpdateSuccess = true;
        // state.myProjects = action.payload;
        // here you need filter and change data
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.isUpdateLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = projectSlice.actions;
export default projectSlice.reducer;
