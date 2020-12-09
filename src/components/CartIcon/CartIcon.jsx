import carrito from './CartIcon.png';
import useCartContext from '../../context/CartContext';
import { Link } from "react-router-dom";

const CartIcon = () => {
    const { productsCount } = useCartContext()

    return (
        <div>
            <Link to="/Cart" style={{ color: '#FFF' }}><img src={carrito} width="25"></img>{productsCount()}</Link>
        </div>
    )
}

export default CartIcon