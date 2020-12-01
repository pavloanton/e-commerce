// import Button from 'react-bootstrap/Button';
import ButtonQL from '../Button/Button';
import { useParams } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const { default: ItemCounter } = require("../ItemCounter/ItemCounter");

const agregarToCarrito = (counter) => {
    alert("Se ha agregado al carrito " + counter + " articulos");
    console.log("Cristian TravAlarcon")
 }

const ItemDetail = ({product}) => {

    console.log(product)

        return (
            <div>
                <div>
                <h2>{product.name}</h2>
                <h3>Price: ${product.price}</h3>
                </div>
                <ItemCounter onAdd={agregarToCarrito}></ItemCounter>
                <ButtonQL content="COMPRAR" path={""}></ButtonQL>
            </div>
        )
    }

// const comprarPlayera = ({product}) =>{
// }
//     return (
//         <div>
//             <div>
//             <h2>{product.name}</h2>
//             <h3>Price: ${product.price}</h3>
//             </div>
//             <ItemCounter onAdd={agregarToCarrito}></ItemCounter>
//             <Button variant="success" alguin-item="center" onClick={comprarPlayera => alert(`Compraste ${product.name}`)}>COMPRAR</Button>
//         </div>
//     )

export default ItemDetail;