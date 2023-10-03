import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const SLICE_KEY = 'posts';

const initialState = {
  filter: "",
  posts: [],
  filtered: []
}

export const fetchPosts = createAsyncThunk(
  `${SLICE_KEY}/fetchPosts`,
  async () => {
    // const response = await client.get('/fakeApi/todos');
    // return response.todos;

    return new Promise((resolve, reject) => {

      const posts = [
        { id: 1, nombre: "NOMBRE POST 1 Cristian", descripcion: "DESCRIPCION POST 1 Cristian" },
        { id: 2, nombre: "NOMBRE POST 2 Gabriel", descripcion: "DESCRIPCION POST 2 Gabriel" },
        { id: 3, nombre: "NOMBRE POST 3 Vicente", descripcion: "DESCRIPCION POST 3 Vicente" },
        { id: 4, nombre: "NOMBRE POST 4 Marjorie", descripcion: "DESCRIPCION POST 4 Marjorie" },
        { id: 5, nombre: "NOMBRE POST 5 Renato", descripcion: "DESCRIPCION POST 5 Renato" },
        { id: 6, nombre: "NOMBRE POST 6 Simón", descripcion: "DESCRIPCION POST 6 Simón" },
        { id: 7, nombre: "NOMBRE POST 7 Clemente", descripcion: "DESCRIPCION POST 7 Clemente" }
      ];

      return resolve(posts);

    });

  }
);

export const savePost = createAsyncThunk(
  `${SLICE_KEY}/savePost`,
  async (post) => {
    // const initialTodo = { text }
    // const response = await client.post('/fakeApi/todos', { todo: initialTodo })
    // return response.todo

    return new Promise((resolve, reject) => {

      return resolve(post);

    });
  }
);

export const removePost = createAsyncThunk(
  `${SLICE_KEY}/removePost`,
  async (postId) => {
    // const initialTodo = { text }
    // const response = await client.post('/fakeApi/todos', { todo: initialTodo })
    // return response.todo

    return new Promise((resolve, reject) => {

      return resolve(postId);

    });
  }
);

export const postsSlice = createSlice({
  name: SLICE_KEY,
  initialState,
  reducers: {
    addPost: (state, action) => {

      // Updating app state when a post is added.
      const post = action.payload;

      state.posts.push(post);

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
        const postId = action.payload;

        const postIndex = state.posts.findIndex(p => p.id === postId);
        state.posts.splice(postIndex, 1);

      })
  }
});

export const { addPost, deletePost, filterPost, getAll } = postsSlice.actions

export default postsSlice.reducer