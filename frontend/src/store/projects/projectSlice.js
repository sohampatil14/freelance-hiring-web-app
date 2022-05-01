import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectService from "./projectService";

const initialState = {
  projects: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  singleProject: {},
  message: "",
};

// Fetch Projects
export const fetchProjects = createAsyncThunk(
  "projects/fetch",
  async (filterData, thunkAPI) => {
    try {
      return await projectService.fetchProjects(filterData);
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Fetch Project
export const fetchProject = createAsyncThunk(
  "singleProject/fetch",
  async (projectId, thunkAPI) => {
    try {
      return await projectService.fetchProject(projectId);
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.projects = [];
      state.singleProject = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.projects = [];
      })

      //Fetch Single Project
      .addCase(fetchProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleProject = action.payload;
      })
      .addCase(fetchProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.singleProject = [];
      });
  },
});

export const { reset } = projectSlice.actions;
export default projectSlice.reducer;
