import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Auth from './components/Auth/Auth';
import PostDetail from './components/Posts/PostDetail';
import EditPostDetail from './components/Posts/EditPostsDetail';
import { Home } from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/auth/:type">
          <Auth />
        </Route>

        <Route path="/post/edit/:id" >
          <EditPostDetail />
        </Route>

        <Route path="/post/:id">
          <PostDetail />
        </Route>

      </Switch>
      
      <button className="create">Create New Post</button>
    </>
  );
}

export default App;
