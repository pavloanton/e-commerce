import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Home from './containers/Home/Home';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { AppProvider } from './context/CartContext';
import ItemsContext from './context/ItemsProvider';

function App() {
  return (
    <div>
      <AppProvider>
      <ItemsContext>
      <BrowserRouter>
        <NavBar NavBar="Home" Catalog="Catalog" Bands="Bands" ContactUs="Contact Us"/>
         <Switch>
            <Route exact path="/">
             <Home/>
            </Route>
            <Route exact path='/itemdetail/:id'>
             <ItemDetailContainer/>
            </Route>
            <Route exact path='/Cart'>
            <Cart/>
            </Route>
          </Switch>
      </BrowserRouter>
      </ItemsContext>
      </AppProvider>
      {/* {Footer} */}
    </div>
  );
}

// LAS BANDAS UNA TABLA Y LAS POLERAS Y POLERONES OTRA

// LAS TALLAS OTRA

// STOCK OTRA EN VOLA

export default App;