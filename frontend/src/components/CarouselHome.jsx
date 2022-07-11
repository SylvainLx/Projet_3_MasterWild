import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";

import Solutions909 from "../assets/logo_partenaires/solutions909.jpeg";
import Anssi from "../assets/logo_partenaires/anssi.png";
import Mydatafit from "../assets/logo_partenaires/mydatafit.jpeg";
import Alectio from "../assets/logo_partenaires/alectio.png";
import Keyrus from "../assets/logo_partenaires/keyrus.png";
import Tricky from "../assets/logo_partenaires/tricky.png";

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
      content: <img src={Solutions909} alt="1" />,
    },
    {
      key: 2,
      content: <img src={Anssi} alt="2" />,
    },
    {
      key: 3,
      content: <img src={Mydatafit} alt="3" />,
    },
    {
      key: 4,
      content: <img src={Alectio} alt="4" />,
    },
    {
      key: 5,
      content: <img src={Keyrus} alt="5" />,
    },
    {
      key: 6,
      content: <img src={Tricky} alt="6" />,
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
