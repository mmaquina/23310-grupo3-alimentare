import Tarjeta from "./RecetaCard.jsx";
import { React, useState, useEffect } from "react";
import { getItems } from '../firebase/utils.jsx';
import db from '../firebase/FirebaseConfig.jsx';
import { MDBRow } from 'mdb-react-ui-kit';
const COLECCION_RECETAS = 'recetas';

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
    <div className="relative isolate  mt-20 text-center">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#facc15] to-[#eff6ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <h2>Recetas</h2>
      <div className="container  flex  flex-wrap text-center">
        <MDBRow className='row-cols-md-4 g-4'>
            <Tarjeta receta={{Titulo: "Añadir receta", Receta: "Pulse para colaborar con su propia receta a la página."}}/>
        
            {recetas.map((receta, index) => {
              
              return (
                <div key={index}>
                  <Tarjeta receta={receta} />
                </div>
              );
            })}
        </MDBRow>

      </div>  
    </div>
  );
}
