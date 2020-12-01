const products = [
    {
        "id": 1,
        "name": "'Abyssal' Long Sleeve T-Shirt – Humanitys Last Breath",
        "price": 15000,
        "stock": 6
      }, {
        "id": 2,
        "name": "'Montreal Deathcore' Long Sleeve T-Shirt - Despised Icon",
        "price": 15000,
        "stock": 39
      }, {
        "id": 3,
        "name": "'Hail Satan' T-Shirt - Slaughter To Prevail'",
        "price": 15000,
        "stock": 666
      }, {
        "id": 4,
        "name": "'Infinite Death T-Shirt' - Thy Art Is Murder",
        "price": 16000,
        "stock": 96
      }, {
        "id": 5,
        "name": "'THALL' T-Shirt - Vildhjarta",
        "price": 24000,
        "stock": 20
      }, {
        "id": 6,
        "name": "'Reign Of Darkness' T-Shirt - Thy Art Is Murder",
        "price": 15000,
        "stock": 5
      }, {
        "id": 7,
        "name": "'Logo' Hoodie - Shadow Of Intent",
        "price": 25000,
        "stock": 30
      }, {
        "id": 8,
        "name": "'Dark Souls' Long Sleeve T-Shirt - Hollow Prophet",
        "price": 25000,
        "stock": 67
      }, {
        "id": 9,
        "name": "'Notre-Dame' Long Sleeve - Hollow Prohet",
        "price": 15000,
        "stock": 30
      }, {
        "id": 10,
        "name": "'Sydney Death' Pink Hoodie - To The Grave",
        "price": 29000,
        "stock": 35
      }
]

export const getProducts = () => {
    return new Promise((resolve) => {
      resolve(products)
    })
  }

const getProductById = (id) => {
     return new Promise((resolve) => {
       resolve(products.find((product) => product.id == id))
     })
   }

   export default getProductById;