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
        alert(`Agregado " ${product.name} " al Carrito`)
        
    }
        return (
            <div>
                <div>
                <h2>{product.name}</h2>
                <h3>Price: ${product.price}</h3>
                </div>
                <ItemCounter onAdd={handleCounter}></ItemCounter>
                <Button onClick={addProductToCart} variant="danger" disabled={quantity==0 ? true : false} alguin-item="center">Add to Cart {quantity}</Button>
            </div> 
        )
    }

export default ItemDetail;