import { createContext, useContext, useState } from 'react'

const CartContext = createContext()
const useCartContext = () => useContext(CartContext)

export const AppProvider = ({ children }) => {

    const [products, setProducts ] = useState([])

    const addProduct = (product, quantity) => {
        //buscar en array si existe

        const existing = products.find((p) => p.id===product.id)

        if(existing) {
            existing.quantity += quantity
            setProducts([...products])
        }
        else {
            setProducts([...products, { ...product, quantity}])
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
    const getGrandTotal = () => {

    }

    //Editar Carrito

    //vaciar Carrito
    //setProducts([])


    return <CartContext.Provider value ={{ products, addProduct, productsCount, delProduct}}>
        {children}
    </CartContext.Provider>
}

export default useCartContext