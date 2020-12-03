import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const { default: ItemCounter } = require("../ItemCounter/ItemCounter");

const ItemDetail = ({product}) => {

    const [quantity, setQuantity] = useState(0)

    const handleCounter = (counter) => {
    setQuantity(counter)
      
    }
        return (
            <div>
                <div>
                <h2>{product.name}</h2>
                <h3>Price: ${product.price}</h3>
                </div>
                <ItemCounter onAdd={handleCounter}></ItemCounter>
                <Button variant="danger" alguin-item="center">AGREGAR AL CARRITO {quantity}</Button>
            </div>
        )

    }

export default ItemDetail;