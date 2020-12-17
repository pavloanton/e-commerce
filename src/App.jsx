import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Home from './containers/Home/Home';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { AppProvider } from './context/CartContext';
import ItemsContext from './context/ItemsProvider';
import ItemDetail from './components/ItemDetail/ItemDetail';
import CartContext from './context/CartProvider';

function App() {
  return (
    <div>
      <CartContext>
      <ItemsContext>
      <AppProvider>
      <BrowserRouter>
        <NavBar NavBar="Home" Catalog="Catalog" Bands="Bands" ContactUs="Contact Us"/>
         <Switch>
            <Route exact path="/">
             <Home/>
            </Route>
            <Route exact path='/itemdetail/:idProducto'>
             <ItemDetail/>
            </Route>
            <Route exact path='/cart'>
            <Cart/>
            </Route>
          </Switch>
      </BrowserRouter>
      </AppProvider>
      </ItemsContext>
      </CartContext>
      {/* {Footer} */}
    </div>
  );
}

// LAS BANDAS UNA TABLA Y LAS POLERAS Y POLERONES OTRA

// LAS TALLAS OTRA

// STOCK OTRA EN VOLA

export default App;