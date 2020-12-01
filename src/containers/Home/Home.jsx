import ItemCounter from '../../components/ItemCounter/ItemCounter';
import { useEffect, useState } from 'react';
import getProductosFromDataBase from '../../lib/database';
import ItemList from "../../components/ItemList/ItemList";
import { getProducts } from '../../lib/Products2';
import Spinner from '../../components/Spinner/Spinner';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {

   const [loading, setLoading] = useState(true);
   const [items, setItems] = useState([])


   const mostrarAlert = () => {
      console.log("Holi");
   }

   useEffect(() => {
      const evento = window.addEventListener('click', mostrarAlert);
      return () => {
         //el evento muere aqui abajo
         window.removeEventListener('click', mostrarAlert);
      }
   }, []);






   useEffect(() => {
      setLoading(true)
      
      setTimeout(() => {
         getProducts()
         .then(
            (response) => {
               console.log(response)
               setItems(response)
               setLoading(false)
            },
            (err) => {
               console.error(err)
            }
         )
         .catch((err) => {
            console.error(err)
         })
         .finally(() => {})


      }, 3000)


   }, [])
  
   return (
      <div className="text-center p-3 mb-2 bg-dark text-white">
        <br></br>

        <div>
        {
        loading ? <Spinner></Spinner> :
         (
            <div>
             <ItemList item={items}></ItemList>
            </div>
         )
         }
        </div>

        <br></br>
      </div>
   )
}

export default Home;