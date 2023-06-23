import React from "react";
import AboutBackground from "../Imagenes/alimentare2.jpg";
import AboutBackgroundImage from "../Imagenes/alimentare3.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          La base de una buena salud es una excelente nutrición
        </h1>
        <p className="primary-text">
          Tu lugar especial e ideal donde encontrarás prodoductos organicos y recetas balanceadas y sanas.
        </p>
        <p className="primary-text">
          Alimentare es tu app de nutrición y productos organicos que promueve el desarrollo sostenible.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Aprende Más</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Mira el Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;