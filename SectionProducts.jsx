import React from "react";
import CardsAlimentare from "../CardsAlimentare";
import product1 from "./Imagenes/alimentare.jpg";
import product2 from "./Imagenes/alimentare1.jpg";
import product3 from "./Imagenes/alimentare2.jpg";
import product4 from "./Imagenes/alimentare3.jpg";
import product5 from "./Imagenes/alimentare4.jpg";
import product6 from "./Imagenes/alimentare5.jpg";
import product7 from "./Imagenes/alimentare6.jpg";
import product8 from "./Imagenes/alimentare7.jpg";
import product9 from "./Imagenes/alimentare8.jpg";
import product10 from "./Imagenes/alimentare9.jpg";
import product11 from "./Imagenes/alimentare10.jpg"
import product12 from "./Imagenes/alimentare11.jpg"
export default function SectionProducts() {
  return (
    <section id='products' className='container-fluid bg-primary p-5'>
      <div className='row m-3'>
        <h3 className='text-center fs-2'>Productos</h3>
      </div>
      <div className='row d-flex flex-wrap justify-content-around'>
        <CardsAlimentare key='alimentare' img={product1} number={1} />
        <CardsAlimentare key='alimentare1' img={product2} number={2} />
        <CardsAlimentare key='alimentare2' img={product3} number={3} />
        <CardsAlimentare key='alimentare3' img={product4} number={4} />
        <CardsAlimentare key='alimentare4' img={product5} number={5} />
        <CardsAlimentare key='alimentare5' img={product6} number={6} />
        <CardsAlimentare key='alimentare6' img={product7} number={7} />
        <CardsAlimentare key='alimentare7' img={product8} number={8} />
        <CardsAlimentare key='alimentare8' img={product9} number={9} />
        <CardsAlimentare key='alimentare9' img={product10} number={10} />
        <CardsAlimentare key='alimentare10' img={product11} number={11} />
        <CardsAlimentare key='alimentare11' img={product12} number={12} />

      </div>
    </section>
  );
}