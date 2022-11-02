import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import settingsService from "../service";

const initialState = {
  postData: [
    {
      "postId": 17,
      "description": "Hi This is my first post-7",
      "category": "Travel",
      "mediaType": "Text",
      "mediaUrl": "",
      "createdBy": "pnadipineni@evoketechnologies.com",
      "profileId": 2,
      "createdAt": 1667294454000
    },
    {
      "postId": 16,
      "description": "Hi This is my first post-6",
      "category": "Travel",
      "mediaType": "Text",
      "mediaUrl": "",
      "createdBy": "pnadipineni@evoketechnologies.com",
      "profileId": 2,
      "createdAt": 1667294449000
    },
    {
      "postId": 15,
      "description": "Hi This is my first post-5",
      "category": "Food",
      "mediaType": "Text",
      "mediaUrl": "",
      "createdBy": "pnadipineni@evoketechnologies.com",
      "profileId": 2,
      "createdAt": 1667294440000
    }
  ],
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
