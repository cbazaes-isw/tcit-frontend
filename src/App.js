import './App.css';
import PostsList from './components/postsList';
import PostForm from './components/postForm';
import PostFilter from './components/postFilter';

function App() {
  return (
    <div className="App">
      <PostFilter />
      <PostsList />
      <PostForm />
    </div>
  );
}

export default App;
