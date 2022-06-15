import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import Harry from "../assets/harryroselmack.png";
import Xavier from "../assets/xavierniel.png";
import Hugo from "../assets/hugoclement.png";

export default function CarouselHome() {
  const state1 = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
  };

  const [showArrows, setShowArrows] = useState(false);

  const [state, setState] = useState(state1);

  const slides = [
    {
      key: 1,
      content: <img src={Harry} alt="1" />,
    },
    {
      key: 2,
      content: <img src={Xavier} alt="2" />,
    },
    {
      key: 3,
      content: <img src={Harry} alt="3" />,
    },
    {
      key: 4,
      content: <img src={Hugo} alt="4" />,
    },
    {
      key: 5,
      content: <img src={Harry} alt="5" />,
    },
    {
      key: 6,
      content: <img src={Xavier} alt="6" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  useEffect(() => {
    setShowArrows(showArrows);
  }, [showArrows]);

  return (
    <div style={{ width: "80%", height: "400px", margin: "4rem auto" }}>
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
