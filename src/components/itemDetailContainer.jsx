import { useContext, useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { LoadProductById, LoadProducts } from "../helpers/LoadProducts";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState();

  const { id } = useParams();
  useEffect(() => {
    const resultado = async () => {
      setProducto(await LoadProductById(id));
    }
    resultado();
  }, [id])
  return (
    <>
      {producto ?
        //aqui no estabas pasando el props de la id
        <ItemDetail
          key={producto.id}
          id={id}
          producto={producto} // faltaba pasar este props por ende no recibia la id
        />
        : <div className="d-flex justify-content-center">
          <div className="spinner-border text-info"></div>
          <span className="sr-only">Cargando...</span>
        </div>}
    </>
  )
}