import './App.css';
import PostsList from './components/postsList';
import PostCreate from './components/postCreate';
import PostFilter from './components/postFilter';

function App() {
  return (
    <div className="App">
      <PostFilter />
      <PostsList />
      <PostCreate />
    </div>
  );
}

export default App;
