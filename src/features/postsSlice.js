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
      console.log('creando post', post);

    },
    deletePost: (state, action) => {

      const postId = action.payload;

      const postIndex = state.posts.findIndex(p => p.id === postId);
      console.log('eliminando post', { posts: state.posts, type: action.type, postIndex, id: action.payload });
      state.posts.splice(postIndex, 1);

    },
    filterPost: (state, action) => {

      state.filter = action.query;
      state.filtered = state.posts.filter(p => p.nombre.includes(state.filter) || p.descripcion.includes(state.filter));
      console.log('filtrando post', { state, query: state.filter });

    },
    getAll: () => initialState
  }
})

// Action creators are generated for each case reducer function
export const { addPost, deletePost, filterPost, getAll } = postsSlice.actions

export default postsSlice.reducer