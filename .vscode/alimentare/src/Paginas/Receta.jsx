import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getItemById } from '../Componentes/firebase/utils.jsx';
import db from '../Componentes/firebase/FirebaseConfig.jsx';

const COLECCION_RECETAS = 'recetas';

export default function Receta() {
    const { id } = useParams();
    const [receta, setReceta] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getItemById(db, COLECCION_RECETAS, id)
        .then((response) => {
            setReceta(response); // ⬅️ Guardar datos
            console.log(response)
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
        <div className='mx-5 my-2 px-5' >
            <h1 className='text-center text-capitalize'>{receta.Titulo}</h1>
            <span className='relative isolate' style={{whiteSpace: 'pre-line'}}>
                <p className='mx-5'>{receta.Receta}</p>
            </span>
        </div>
    );
}