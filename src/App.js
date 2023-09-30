import './App.css';
import PostsList from './components/postsList';
import PostCreate from './components/postCreate';

function App() {
  return (
    <div className="App">
      <PostsList />
      <PostCreate />
    </div>
  );
}

export default App;
