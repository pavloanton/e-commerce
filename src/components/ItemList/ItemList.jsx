import React, { useEffect, useState, useContext } from 'react';
import Item from '../Item/Item';

const ItemList = ({item}) => {
   
   return (
         item.map(product => (
            <div className="col-12 col-sm-4 mb-5" key={ product.id }>
                 <div>
                      <div>
                           <img 
                                src={product.img}
                                alt={product.title}
                                className="img-fluid"
                           />
                      </div>
                      <div>
                           <h5>{product.title}</h5>
                           <div>
                                <div>
                                     ${product.price} USD
                                </div>
                           </div>
                           <div>
                               <Item item={product.id}></Item>
                           </div>
                      </div>
                 </div>
            </div>
            ))
   )
}

export default ItemList;