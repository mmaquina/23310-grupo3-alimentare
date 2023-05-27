import React from "react";
import Logo from '../Imagenes/alimentare.png'

export default function Main(props) {
  return (
    <main className='container d-flex' id="home" style={{height:"100vh"}}>
      <div className='container-fluid d-flex flex-row flex-wrap align-items-center justify-content-around'>
        <figure style={{width:"25rem"}}>
          <img
            src={props.frontAlimentare}
            alt='front alimentare'
            className='rounded img-fluid shadow'></img>
        </figure>
        <div style={{width:"30rem"}}>
          <h1 className='text-dark'>
            Bienvenido a ALIMENTARE! Dietetica & Nutricion 
          </h1>
 
          <p className='text-secondary'>
            En ALIMENTARE encontrarás nuestras distintas lineas de productos dietéticos, además te proponemos distintas
            variedades de platos nutricionales para que puedas complementarlos con nuestros productos.
          </p>
        </div>
      </div>
    </main>
  );
}