import { useContext, useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { LoadProductById, LoadProducts } from "../helpers/LoadProducts";
import { CartContext } from "./CartContext";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [productos, setProductos] = useState();
  const { listProducts } = useContext(CartContext)

  const { id } = useParams();
  console.log(id); // si la esta mostrando
  console.log(listProducts);
  useEffect(() => {
    const resultado = async () => {
      setProductos(await LoadProductById(id));
    }
    resultado();
  }, [id])
  return (
    <>
      {productos ?
        //aqui no estabas pasando el props de la id
        <ItemDetail
          key={productos.image}
          id={id} // faltaba pasar este props por ende no recibia la id
          stock={productos.availableStock}
          precio={productos.price}
          imagen={productos.image}
          descripcion={productos.description}
        />
        : <div className="d-flex justify-content-center">
          <div className="spinner-border text-info"></div>
          <span className="sr-only">Cargando...</span>
        </div>}
    </>
  )
}