import carrito from './CartIcon.png';
import useCartContext from '../../context/CartContext';
import { ItemsContext } from "../../context/ItemsProvider";
import { Link } from "react-router-dom";
import { useContext } from 'react';

const CartIcon = () => {
    const { productsCount } = useContext(ItemsContext)

    return (
        <div>
            <Link to="/Cart" style={{ color: '#FFF' }}><img src={carrito} width="25"></img>{productsCount()}</Link>
        </div>
    )
}

export default CartIcon