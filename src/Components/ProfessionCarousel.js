import React from "react";
import { Carousel } from "react-bootstrap";
import "Style/Carousel.css";

const ProfessionCarousel = () => {
  return (
    <Carousel className="mainCarousel">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/img/profession/warrior.jpg"}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/img/profession/thief.jpg"}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/img/profession/magician.jpg"}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/img/profession/ascetic.jpg"}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/img/profession/fighter.jpg"}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/img/profession/archer.jpg"}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/img/profession/lancer.jpg"}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/img/profession/sky.jpg"}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ProfessionCarousel;
