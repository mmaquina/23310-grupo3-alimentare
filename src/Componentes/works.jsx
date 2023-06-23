import React from "react";
import PickMeals from "../Imagenes/alimentare4.jpg";
import ChooseMeals from "../Imagenes/alimentare5.jpg";
import DeliveryMeals from "../Imagenes/alimentare6.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Nuestros productos Veganos y Organicos",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Nuestros Platos o Recetas Sugeridas por Alimentare Team ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Subi tu Receta nutritiva",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Loggueate, subí tu receta y forma parte de nuestra Comunidad Alimentare.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;