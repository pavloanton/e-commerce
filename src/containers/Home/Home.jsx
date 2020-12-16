import ItemCounter from '../../components/ItemCounter/ItemCounter';
import React, { useEffect, useState, useContext } from 'react';
import getProductosFromDataBase from '../../lib/database';
import ItemList from "../../components/ItemList/ItemList";
import { getProducts } from '../../lib/Products2';
import Spinner from '../../components/Spinner/Spinner';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import '../../components/Logo/Logo.styles.scss'
import { ItemsContext } from '../../context/ItemsProvider'

const Home = () => {

   const { getItems, items } = useContext( ItemsContext )
   console.log(items)
   useEffect(() => { getItems() },[])

   return (
       <div className="text-center p-3 mb-2 bg-dark text-white">
             <br></br>
                <h1 className='title'>AbyssaL</h1>
                <h1 className='title'>MercH</h1>
                <br></br>
                <br></br>
                <div>
                   <div>
                    <ItemList item={items}></ItemList>
                   </div>
                </div>
             </div>
          )
       
   
//    const [loading, setLoading] = useState(true);
//    const [items, setItems] = useState([])


//    const mostrarAlert = () => {
//       console.log("Holi");
//    }

//    useEffect(() => {
//       const evento = window.addEventListener('click', mostrarAlert);
//       return () => {
//          //el evento muere aqui abajo
//          window.removeEventListener('click', mostrarAlert);
//       }
//    }, []);


//    useEffect(() => {
//       setLoading(true)
      
//       setTimeout(() => {
//          getProducts()
//          .then(
//             (response) => {
//                console.log(response)
//                setItems(response)
//                setLoading(false)
//             },
//             (err) => {
//                console.error(err)
//             }
//          )
//          .catch((err) => {
//             console.error(err)
//          })
//          .finally(() => {})


//       }, 3000)


//    }, [])
  
//    return (
//       <div className="text-center p-3 mb-2 bg-dark text-white">
//          <br></br>
//          <h1 className='title'>Abyssal Merch</h1>
//          <br></br>
//          <br></br>
//          <div>
//          {
//          loading ? <Spinner></Spinner> :
//          (
//             <div>
//              <ItemList item={items}></ItemList>
//             </div>
//          )
//          }
//          </div>
//       </div>
//    )
// }

   // ESTO ES FIREBASE
   // const [productos, setProductos] = useState();

   // useEffect(() => {

   // const db = getFirestore();
   // const itemCollection = db.collection('products');

   // itemCollection.get().then((response) => {
   //    const aux = response.docs.map(element => {
   //       return element.data();
   //       });
   //       setProductos(aux)
   // });

   // }, []);

   // return <>
   //    <div className="text-center p-3 mb-2 bg-dark text-white">
   //       <br></br>
   //       <h1 className='title'>Abyssal Merch</h1>
   //       <br></br>
   //       <br></br>
   //       {productos ?
   //       productos.map(element => {
   //          return <p>{element.name} + {element.price} + {element.description}</p>
   //       }):'cargando'}
   //    </div>
   //       </>
}

export default Home