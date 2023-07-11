import { useState, useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { db } from "../../services/config"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
const [productos, setProductos] = useState([]);
const { idCategoria } = useParams();

useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario")

    getDocs(misProductos)
    .then( res => {
        const nuevosProductos = res.docs.map( doc => {
            const data = doc.data()
            return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos)
    })
    .catch(error => console.log(error))



}, [idCategoria])
    return (
        <>
<ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer