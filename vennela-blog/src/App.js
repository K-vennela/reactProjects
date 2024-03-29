import './App.css';
import Navbar from "./Navbar"
import Home from "./Home"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateNewBlog from './CreateNewBlog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/create">
            <CreateNewBlog />
          </Route>
          
          <Route path='/details/:id'>
              <BlogDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>  
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
