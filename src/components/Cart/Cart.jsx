import { useState } from 'react';
import useCartContext from "../../context/CartContext";
import EmptyCart from "../EmptyCart/EmptyCart";
import Table from 'react-bootstrap/Table';
import Button2 from '../Button2/Button2';
import ButtonQL from '../Button/Button'

const Cart = () => {

    const { delProduct, products } = useCartContext()

    console.log(products)

    const handleDel = (p) => {
        delProduct(p.id)
    }

    return (
        
        <div className="text-center p-3 mb-2 bg-dark text-white">
            <h2>Shopping Cart</h2>
            {products==0 ? 
                <EmptyCart></EmptyCart>
                :
                <Table responsive="sm" variant="dark" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                            <td><Button2 callback={() => handleDel(product)} content={"X Remove"} ></Button2></td>
                        </tr>
                        ))
                    }
                        <tr>
                            <td colspan="3"><ButtonQL size={"sm"} content={"RETURN TO HOME"} path={"/"}></ButtonQL></td>
                            <td>Cart Total: $ ????????</td>
                        </tr>
                    </tbody>
                </Table>
                }
        </div>
        
    )
}

export default Cart;