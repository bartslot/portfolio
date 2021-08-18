import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Work from './components/Work';
import SingleWork from './components/SingleWork';
import NavBar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={SingleWork} path='/work/:slug' />
        <Route component={Work} path='/work' />  
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
