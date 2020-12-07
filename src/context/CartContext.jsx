import { createContext, useContext, useState } from 'react'

const CartContext = createContext()
const useCartContext = () => useContext(CartContext)

export const AppProvider = ({ children }) => {

    const [dummyText, setDummyText ] = useState('PABLITO')

    return <CartContext.Provider value ={{ dummyText }}>
        {children}
    </CartContext.Provider>
}

export default useCartContext