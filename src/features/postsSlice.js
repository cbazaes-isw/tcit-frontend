import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const { REACT_APP_TCIT_API_URL } = process.env;
const SLICE_KEY = 'posts';

const initialState = {
  filter: "",
  posts: [],
  filtered: []
}

export const fetchPosts = createAsyncThunk(
  `${SLICE_KEY}/fetchPosts`,
  async () => {

    let requestOptions = { mode: "cors", method: "GET" };
    let response = await fetch(`${REACT_APP_TCIT_API_URL}/posts`, requestOptions);
    let posts = await response.json();
    return posts;

  }
);

export const savePost = createAsyncThunk(
  `${SLICE_KEY}/savePost`,
  async (post) => {

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(post),
      mode: 'cors'
    };

    let response = await fetch(`${REACT_APP_TCIT_API_URL}/posts`, requestOptions);
    let postCreated = await response.json();
    return postCreated;

  }
);

export const removePost = createAsyncThunk(
  `${SLICE_KEY}/removePost`,
  async (postId) => {

    let requestOptions = { mode: "cors", method: "DELETE" };
    let response = await fetch(`${REACT_APP_TCIT_API_URL}/posts/${postId}`, requestOptions);
    let deletedPost = await response.json();
    return deletedPost;

  }
);

export const postsSlice = createSlice({
  name: SLICE_KEY,
  initialState,
  reducers: {
    filterPost: (state, action) => {

      // Updating app state when a query occurs.
      state.filter = action.payload;

    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {

        let posts = action.payload;
        state.posts = posts;

      })
      .addCase(savePost.fulfilled, (state, action) => {

        // Updating app state when a post is added.
        const post = action.payload;

        state.posts.push(post);

      })
      .addCase(removePost.fulfilled, (state, action) => {

        // Updating app state when a post id deleted.
        const deletedPost = action.payload;

        const postIndex = state.posts.findIndex(p => p.id === deletedPost.id);
        state.posts.splice(postIndex, 1);

      })
  }
});

export const { addPost, deletePost, filterPost, getAll } = postsSlice.actions

export default postsSlice.reducer