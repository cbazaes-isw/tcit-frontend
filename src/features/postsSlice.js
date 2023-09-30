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

      const post = action.payload;
      state.posts.push(post);
      if (state.filter && post.nombre.includes(state.filter)) state.filtered.push(post);

    },
    deletePost: (state, action) => {

      const postId = action.payload;

      const postIndex = state.posts.findIndex(p => p.id === postId);
      state.posts.splice(postIndex, 1);

    },
    filterPost: (state, action) => {

      state.filter = action.payload;
      state.filtered = state.posts.filter(p => p.nombre.includes(state.filter));

    },
    getAll: () => initialState
  }
})

// Action creators are generated for each case reducer function
export const { addPost, deletePost, filterPost, getAll } = postsSlice.actions

export default postsSlice.reducer