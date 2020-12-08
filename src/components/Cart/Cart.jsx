import useCartContext from "../../context/CartContext";

const Cart = () => {

    const { delProduct, products } = useCartContext()

    console.log(products)

    const handleDel = (p) => {
        delProduct(p.id)
    }


    return (
        <div className="text-center p-3 mb-2 bg-dark text-white">
            <h2>CARRITO</h2>
            {products.map((product) => (
                <h1 onClick={() => handleDel(product)}>{`"${product.name}" Cantidad: ${product.quantity}`}</h1>
            ))}
        </div>
    )
}

export default Cart;