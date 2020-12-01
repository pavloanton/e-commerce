import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Home from './containers/Home/Home';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar NavBar="Home" Catalog="Catalog" Bands="Bands" ContactUs="Contact Us"/>
         <Switch>
            <Route exact path="/">
             <Home/>
            </Route>
            <Route exact path='/itemdetail/:id'>
             <ItemDetailContainer/>
            </Route>
            <Route>
              <Cart exact path="/Cart"/>
            </Route>
          </Switch>
      </BrowserRouter>
      {/* {Footer} */}
    </div>
  );
}

export default App;