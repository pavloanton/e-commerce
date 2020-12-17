import React, { createContext, useState } from "react";
import { getFirestore } from "../firebase";
export const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState([]);
  const [products, setProducts ] = useState([]);

  const getItems = async () => {
    try {
      const db = getFirestore();
      const data = await db.collection("products").get();
      const arrayItems = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(arrayItems);
    } catch (error) {
      console.log(error);
    }
  };

  const getItemsId = (idProducto) => {
    try {
      const db = getFirestore();
      const data = db.collection("products").doc(idProducto);
      data
        .get()
        .then(function (doc) {
          setItemId(doc.data());
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = (itemId, quantity) => {

      const existing = products.find((p) => p.id===itemId.id)

      if(existing) {
          existing.quantity += quantity
          setProducts([...products])
      }
      else {
          setProducts([...products, { ...itemId, quantity}])
      }
  }

  const delProduct = (id) => {
    products.splice(
        products.findIndex((p) => p.id === id),1
    )
    setProducts([...products])
}

const productsCount = () => {
  return products.reduce((acc, p) => (acc += p.quantity), 0)
}


  return (
    <ItemsContext.Provider
      value={{
        getItems,
        items,
        getItemsId,
        itemId,
        addProduct,
        delProduct,
        products,
        productsCount
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;