import { createContext, useContext, useState } from 'react'
import { useEffect } from 'react';
const CartContext = createContext()
const useCartContext = () => useContext(CartContext)

export const AppProvider = ({ children }) => {
        
    const [products, setProducts ] = useState([])

    const addProduct = (itemId, quantity) => {
        //buscar en array si existe

        const existing = products.find((p) => p.id===itemId.id)

        if(existing) {
            existing.quantity += quantity
            setProducts([...products])
        }
        else {
            setProducts([...products, { ...itemId, quantity}])
        }
    }

    //get productCount

    const productsCount = () => {
        return products.reduce((acc, p) => (acc += p.quantity), 0)
    }
    
    //Eliminar un tiem del array
    const delProduct = (id) => {
        products.splice(
            products.findIndex((p) => p.id === id),1
        )
        setProducts([...products])
    }
    
    //suma total de los productos => importe total
    const getFinalTotal = () => {
        // return products.reduce((acc, p) => (acc += p.price * p.quantity), 0)
    }

    //Editar Carrito

    //vaciar Carrito
    //setProducts([])


    return <CartContext.Provider value ={{ products, addProduct, productsCount, delProduct, getFinalTotal}}>
        {children}
    </CartContext.Provider>
}

export default useCartContext