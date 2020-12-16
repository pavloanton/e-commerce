import React, { createContext, useState } from "react";
import { getFirestore } from "../firebase";
export const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

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

  return (
    <ItemsContext.Provider
      value={{
        getItems,
        items
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;