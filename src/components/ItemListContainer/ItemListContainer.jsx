import React from 'react';
import { useState, useEffect } from 'react';
import styles from './ItemList.module.css'
import ItemList from './ItemList';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  useEffect(() => {
  fetch('https://fakestoreapi.com/products/')
  .then(response => response.json())
  .then(json => {
      setProductos(json)
  })
  .catch(error => {
  console.log("estamos teniendo errores" + error)
  })
}, [])

return (
<>
{
 <ItemList productos={productos}/>
}
</>
)

}

export default ItemListContainer

