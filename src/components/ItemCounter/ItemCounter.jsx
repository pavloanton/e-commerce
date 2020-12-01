import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

const ItemCounter = ({initialValue = 0, maxValue = 10, minValue = 0,onAdd}) => {
    const [counter, setCounter] = useState(initialValue);

    const decrement = () => {
        if(counter>minValue)
        {
            setCounter(counter - 1);
        }
    }

    const increment = () => {
        if(counter<maxValue)
        {
            setCounter(counter + 1);
        }
    }

    const addToCarrito = () => {
        onAdd(counter);
    }

    return (
        <div>
            <Button variant="danger" alguin-item="center" onClick={decrement}>-</Button>
            <input type="text" className="text-center" value={counter} disabled="disabled" />
            <Button variant="danger" onClick={increment}>+</Button>
            <br/>
            <Button variant="danger" alguin-item="center" onClick={addToCarrito}>AGREGAR AL CARRITO</Button>
        </div>
    )

}

export default ItemCounter;