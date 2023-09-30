import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';
import store from './store'

const node = document.getElementById('root')
const root = createRoot(node);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>  
)