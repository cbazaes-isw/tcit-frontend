import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './store';
import { fetchPosts } from './features/postsSlice';

const node = document.getElementById('root');
const root = createRoot(node);

store.dispatch(fetchPosts())

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)