import { useEffect, useState } from 'react';
import { getProduct } from '../../lib/Products';
import { getProducts } from '../../lib/Products';
import getProductById from '../../lib/Products2';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Spinner from '../../components/Spinner/Spinner';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
      setLoading(true)

      setTimeout(() => {
         getProductById(id)
          .then(
             (response) => {
                 console.log(response)
                setProduct(response)
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
      }, 3000);
    }, [id])

    return (

        <div className="text-center p-3 mb-2 bg-dark text-white">
           {
              loading ? <Spinner></Spinner> :
              <ItemDetail product={product}></ItemDetail>
           }
           <br></br>
        </div>
    );
}

export default ItemDetailContainer;