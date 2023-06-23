import React from "react";
import BannerBackground from "../Imagenes/alimentare.jpg";
import BannerImage from "../Imagenes/alimentare1.jpg";
import Navbar from "./navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Bienvenido a tu app Nutricional a medida
          </h1>
          <p className="primary-text">
            Podes encontra productos de nuestra brand, recetas, además podes aportar tus propias 
            recetas nutritivas.
          </p>
          <button className="secondary-button">
            Loggeate Ahora <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;