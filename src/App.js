import logo from './logo.svg';
import './App.css';
import PostsList from './components/postsList';
import PostCreate from './components/postCreate';
// import { Provider } from 'react-redux';
// import store from './store';

function App() {
  return (
    <div className="App">
      <PostsList />
      <PostCreate />
    </div>
  );
}

export default App;
