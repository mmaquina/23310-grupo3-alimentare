import Tarjeta from "./RecetaCard.jsx";
import { React, useState, useEffect } from "react";
import { getItems } from '../firebase/utils.jsx';
import db from '../firebase/FirebaseConfig.jsx';
import { MDBRow, MDBCardGroup } from 'mdb-react-ui-kit';

const COLECCION_RECETAS = 'recetas';

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

export default function Recetas() {
  const [isLoading, setIsLoading] = useState(true);
  const [recetas, setRecetas] = useState(null);


  useEffect(() => {
    getItems(db, COLECCION_RECETAS)
    .then((response) => {
      setRecetas(response); // ⬅️ Guardar datos
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

  console.log(recetas)

  return (
    <div className="relative isolate text-center">
      <h2>Recetas</h2>
      <div className="container flex flex-wrap text-center">
      <MDBCardGroup>

        <MDBRow className='row-cols-md-4 g-4'>
            <Tarjeta receta={{
              Titulo: "Añadir receta", 
              Receta: "Pulse para colaborar subiendo su propia receta a la página.",
              foto: 'https://icon-library.com/images/add-photo-icon/add-photo-icon-17.jpg'}}/>
        
            {recetas.map((receta, index) => {
              receta.foto = 'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png';
              receta.Receta = limitString(receta.Receta, 60) + '...';

              return (
                <div key={index}>
                  <Tarjeta receta={receta} />
                </div>
              );
            })}
        </MDBRow>
      </MDBCardGroup>

      </div>  
    </div>
  );
}
