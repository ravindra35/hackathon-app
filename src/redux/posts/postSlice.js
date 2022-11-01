import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import settingsService from "../service";

const initialState = {
  postData: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const getPostDetails = createAsyncThunk(
  "settings/getPostDetails",
  async (request, thunkAPI) => {
    try {
      return await settingsService.getPostDetails(request);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const savePost = createAsyncThunk(
  "settings/savePost",
  async (request, thunkAPI) => {
    try {
      return await settingsService.savePost(request);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPostDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Got Posts";
        console.log(action);
        state.userDetails = action.payload;
      })
      .addCase(getPostDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message =
          action.payload?.response?.data?.errors?.msg ||
          action.payload?.message ||
          "Something went wrong!";
      })
      .addCase(savePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(savePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Post Saved Successfully";
        console.log(action);
      })
      .addCase(savePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message =
          action.payload?.response?.data?.errors?.msg ||
          action.payload?.message ||
          "Something went wrong!";
      });
  },
});

// export const { reset } = postSlice.actions;
export default postSlice.reducer;
