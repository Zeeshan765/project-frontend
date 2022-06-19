import React, { useState } from "react";
// import { Carousel } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import car1 from "../../Assets/car1.jpg";

import car2 from "../../Assets/car2.jpg";

import car3 from "../../Assets/car3.jpeg";
import "./Carousel.css";

const CarouselComp = () => {
  return (
    <div>
      <Carousel className="carousel" variant="dark">
        <Carousel.Item interval={1500}>
          <img className="m-block w-55" src={car1} alt="First slide" />{" "}
          <div className="divpos">
            <Carousel.Caption className="caption">
              <h3>Build Your own PC</h3>
              <p>and have it at your doostep!</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="m-block w-55" src={car2} alt="Second slide" />
          <div className="divpos">
            <Carousel.Caption className="caption">
              <h3>Get your desired tech</h3>
              <p>with just a few clicks</p>
            </Carousel.Caption>{" "}
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="m-block w-55" src={car3} alt="Third slide" />
          <div>
            <Carousel.Caption className="caption">
              <h3>In a hurry?</h3>
              <p>Here are our top picks to build your desired PC in 2022! </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
