import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import Andrea from "../assets/pictures/homepage/adreaturcu.png";
import Agnes from "../assets/pictures/homepage/agnescrepet.png";
import Garance from "../assets/pictures/homepage/garancelhyvernay.png";
import Jeremy from "../assets/pictures/homepage/jeremylitaize.png";
import Joris from "../assets/pictures/homepage/jorisliberati.png";
import Julien from "../assets/pictures/homepage/julienboyer.png";

export default function CarouselHome() {
  const carouselOptions = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
  };

  const [showArrows, setShowArrows] = useState(false);

  const [state, setState] = useState(carouselOptions);

  const slides = [
    {
      key: 1,
      content: <img src={Andrea} alt="1" />,
    },
    {
      key: 2,
      content: <img src={Joris} alt="2" />,
    },
    {
      key: 3,
      content: <img src={Garance} alt="3" />,
    },
    {
      key: 4,
      content: <img src={Jeremy} alt="4" />,
    },
    {
      key: 5,
      content: <img src={Agnes} alt="5" />,
    },
    {
      key: 6,
      content: <img src={Julien} alt="6" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  useEffect(() => {
    setShowArrows(showArrows);
  }, [showArrows]);

  return (
    <div style={{ width: "80%", height: "300px", margin: "2rem auto" }}>
      <Carousel
        className="carousel-style"
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={showArrows}
        animationConfig={state.config}
      />
    </div>
  );
}
