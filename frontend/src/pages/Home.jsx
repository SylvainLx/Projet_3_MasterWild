import CarouselSearch from "../components/CarouselSearch";
import CarouselHome from "../components/CarouselHome";

import Harry from "../assets/harryroselmack.png";
import Xavier from "../assets/xavierniel.png";
import flower from "../assets/flower.webm";
import "../style/Home.css";

export default function Home() {
  return (
    <div className="container-home">
      <div className="top-page">
        <div>
          <h1>
            <p className="info-top">
              Visionnez nos <span className="accent">masterclasses</span>,<br />
              retrouvez nos partenaires
            </p>
          </h1>
        </div>
        <div className="intro-text">
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1 500s, when an unknown printer took a galley of type and
            scrambled it to make.
          </p>
        </div>
        <div className="flex-button">
          <button type="button" className="button-discover">
            découvrez masterwild
          </button>
        </div>
      </div>
      <div className="carousel-home">
        <CarouselHome />
      </div>
      <div className="home-mosaic">
        <div className="square">
          <div className="text">
            <p className="p-grid">Prénom</p> <p className="p-grid">Nom</p>{" "}
            <p className="p-grid">Métier</p>
          </div>
        </div>
        <div className="square-pic">
          <img src={Xavier} alt="logo-inspiraction" />
        </div>
        <div className="square-pic">
          <img src={Harry} alt="logo-inspiraction" />
        </div>
        <div className="square-two">
          <div className="text-turn">
            <p className="p-grid-turn">Prénom</p>{" "}
            <p className="p-grid-turn">Nom</p>{" "}
            <p className="p-grid-turn">Métier</p>
          </div>
        </div>
        <div className="square">
          <div className="text">
            <p className="p-grid">Prénom</p> <p className="p-grid">Nom</p>{" "}
            <p className="p-grid">Métier</p>
          </div>
        </div>
        <div className="square-pic">
          <img src={Xavier} alt="logo-inspiraction" />
        </div>
      </div>
      <div className="video-sample-area">
        <div className="video-sample">
          <video controls width="1500">
            <source src={flower} type="video/webm" />
            <track default kind="captions" srcLang="en" />
          </video>
          <p className="video-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1 500s, when an unknown printer took a galley of type
            and scrambled it to make. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
      </div>
      <div className="search-exemples">
        <div className="first-block">
          <h2>Exemples recherches métiers</h2>
          <CarouselSearch />
        </div>
        <div className="second-block">
          <h2>Exemples recherches thématiques</h2>
          <CarouselSearch />
        </div>
      </div>
    </div>
  );
}
