import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import useCartContext from '../../context/CartContext'
import CartIcon from '../CartIcon/CartIcon'

const { default: ItemCounter } = require("../ItemCounter/ItemCounter");

const ItemDetail = ({product}) => {

    const [quantity, setQuantity] = useState(0)

    const { addProduct } = useCartContext()

    const handleCounter = (counter) => {
    setQuantity(counter)

    }

    const addProductToCart = () => {
        addProduct(product, quantity)
        alert(`Agregado "${product.name}" al Carrito`)
    }
        return (
            <div>
                <div>
                <h2>{product.name}</h2>
                <h3>Price: ${product.price}</h3>
                </div>
                <ItemCounter onAdd={handleCounter}></ItemCounter>
                <Button onClick={addProductToCart} variant="danger" alguin-item="center">AGREGAR AL CARRITO {quantity}</Button>
            </div>
        )
    }

export default ItemDetail;