import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import settingsService from "../service";

const initialState = {
  postData:[],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  savePostLoading: false,
  savePostSuccess: false,
  savePostError: false,
  savePostMessage: "",
  savePostResponse:null
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
export const getPostComments = createAsyncThunk(
  "settings/getPostComments",
  async (request, thunkAPI) => {
    try {
      return await settingsService.getPostComments(request);
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
export const saveComment = createAsyncThunk(
  "settings/saveComment",
  async (request, thunkAPI) => {
    try {
      return await settingsService.saveComment(request);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    resetPostData: (state) => {
      // state.isLoading= false;
      // state.isSuccess= false;
      // state.isError= false;
      // state.message= "";
      state.savePostLoading= false;
      state.savePostSuccess= false;
      state.savePostError= false;
      state.savePostMessage= "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPostDetails.fulfilled, (state, action) => {
        console.log(action)
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Got Posts";
        state.postData = action.payload?.data?.payload;
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
        state.savePostLoading = true;
      })
      .addCase(savePost.fulfilled, (state, action) => {
        state.savePostLoading = false;
        state.savePostError = false;
        state.savePostSuccess = true;
        console.log(action)
        state.savePostResponse = action.payload?.data?.payload;
        state.savePostMessage = "Post Saved Successfully";
      })
      .addCase(savePost.rejected, (state, action) => {
        state.savePostLoading = false;
        state.savePostSuccess = false;
        state.savePostError = true;
        state.savePostMessage =
          action.payload?.response?.data?.errors?.msg ||
          action.payload?.message ||
          "Something went wrong!";
      });
  },
});

export const { resetPostData } = postSlice.actions;
export default postSlice.reducer;
