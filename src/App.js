import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <main className="home">
            <h1>Bulletin Board</h1>
          </main>
        </Route>
      </Switch>
      
      <button className="create" onClick={createPost}>Create New Post</button>
    </>
  );
}

export default App;
