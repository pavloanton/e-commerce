import React, { useEffect, useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import useCartContext from '../../context/CartContext'
import { ItemsContext } from "../../context/ItemsProvider";
import DetailProduct from './DetailProduct';
import CartContext from '../../context/CartProvider';
const { default: ItemCounter } = require("../ItemCounter/ItemCounter");

const ItemDetail = () => {

    const [quantity, setQuantity] = useState(0)
    const { getItemsId, itemId, addProduct } = useContext(ItemsContext);
    const { idProducto } = useParams();
    
    //const { addProduct } = useCartContext()
    //const { addListShop } = useContext( CartContext )
    //const [message, setMessage] = useState('')

    useEffect(() => {
        getItemsId(idProducto);
      }, [idProducto]);

    const handleCounter = (counter) => {
        setQuantity(counter)
        }

    const addProductToCart = () => {
      addProduct(itemId, quantity)
      alert(`Agregado " ${itemId.title} " al Carrito`)
            
    }

    const onAdd = () => { 
      //setMessage('Productos agregados al carro.')
      //addListShop(idProduct, nameProduct, imageProduct, priceProduct)
    }

        return (
            <section className="text-center p-3 mb-2 bg-dark text-white">
                <DetailProduct itemId={itemId} />
                <ItemCounter onAdd={handleCounter}></ItemCounter>
                <Button onClick={() => addProductToCart()} variant="danger" disabled={quantity==0 ? true : false} alguin-item="center">Add to Cart {quantity}</Button>
          </section>
        )
    }

    // const ItemDetail = ({product}) => {

    //     const [quantity, setQuantity] = useState(0)
    
    //     const { addProduct } = useCartContext()
    
    //     const handleCounter = (counter) => {
    //     setQuantity(counter)
    
    //     }
    
    //     const addProductToCart = () => {
    
    //         addProduct(product, quantity)
    //         alert(`Agregado " ${product.name} " al Carrito`)
            
    //     }
    //         return (
    //             <div>
    //                 <div>
    //                 <h2>{product.name}</h2>
    //                 <h3>Price: ${product.price}</h3>
    //                 </div>
    //                 <ItemCounter onAdd={handleCounter}></ItemCounter>
    //                 <Button onClick={addProductToCart} variant="danger" disabled={quantity==0 ? true : false} alguin-item="center">Add to Cart {quantity}</Button>
    //             </div> 
    //         )
    //     }

export default ItemDetail;