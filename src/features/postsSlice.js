import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: "",
  posts: [],
  filtered: []
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {

      // Updating app state when a post is added.
      const post = action.payload;

      state.posts.push(post);
      if (state.filter && post.nombre.includes(state.filter)) state.filtered.push(post); // Filtered list also is updated.

    },
    deletePost: (state, action) => {

      // Updating app state when a post id deleted.
      const postId = action.payload;

      const postIndex = state.posts.findIndex(p => p.id === postId);
      state.posts.splice(postIndex, 1);

    },
    filterPost: (state, action) => {

      // Updating app state when a query occurs.
      state.filter = action.payload;
      state.filtered = state.posts.filter(p => p.nombre.includes(state.filter));

    },
    getAll: () => initialState
  }
})

export const { addPost, deletePost, filterPost, getAll } = postsSlice.actions

export default postsSlice.reducer