import Tarjeta from "./ProductoCard.jsx";
import { React, useState, useEffect } from "react";
import { getItems } from '../firebase/utils.jsx';
import db from '../firebase/FirebaseConfig.jsx';
import Row from 'react-bootstrap/Row';
import { Container} from 'react-bootstrap';

const COLECCION_RECETAS = 'productos';

function limitString(inputString, limit) {
  if (inputString.length <= limit) {
    return inputString; // Return the original string if it's already within the limit
  }
  
  // Find the last space before the limit
  const lastSpaceIndex = inputString.lastIndexOf(' ', limit);

  if (lastSpaceIndex === -1) {
    return inputString.substring(0, limit); // If there are no spaces within the limit, return the substring
  } else {
    return inputString.substring(0, lastSpaceIndex); // Return the substring until the last space within the limit
  }
}

export default function Productos() {
  const [isLoading, setIsLoading] = useState(true);
  const [productos, setProductos] = useState(null);


  useEffect(() => {
    getItems(db, COLECCION_RECETAS)
    .then((response) => {
      setProductos(response); // ⬅️ Guardar datos
      setIsLoading(false); // ⬅️ Desactivar modo "cargando"
    });
  }, []);

  if (isLoading ) { // ⬅️ si está cargando, mostramos un texto que lo indique
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="relative isolate text-center">
      <h2>Productos</h2>
      <div className="container flex flex-wrap text-center">
        <Container className='me-auto' >

          <Row md={5} className="g-5">
            <Tarjeta producto={{
              Titulo: "Añadir producto", 
              Producto: "Pulse para subir su producto.",
              foto: 'https://icon-library.com/images/add-photo-icon/add-photo-icon-17.jpg',
              subirProducto: true}}
            />

            {productos.map((producto, index) => {
              producto.foto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Turkish_Food_on_a_Plate.jpg/800px-Turkish_Food_on_a_Plate.jpg';
              producto.Producto = limitString(producto.Producto, 35) + '...';
              producto.subirProducto = false;

              return (
                <div key={index}>
                  <Tarjeta producto={producto} />
                </div>
              );
            })}
          </Row>

        </Container>
      </div>  
    </div>
  );
}
