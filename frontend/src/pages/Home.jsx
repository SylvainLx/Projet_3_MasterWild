import { NavLink } from "react-router-dom";
import IntroHome from "../components/home/IntroHome";
import IntroWCS from "../components/home/IntroWCS";
import CarouselSearch from "../components/CarouselSearch";
import CarouselHome from "../components/CarouselHome";
import Andrea from "../assets/pictures/homepage/adreaturcu.png";
import Julien from "../assets/pictures/homepage/julienboyer.png";
import Agnes from "../assets/pictures/homepage/agnescrepet.png";

import flower from "../assets/flower.webm";
import "../style/Home.css";

export default function Home() {
  return (
    <div className="container-home">
      <IntroHome />
      <div className="carousel-home">
        <CarouselHome />
      </div>
      <div className="home-mosaic">
        <div className="square">
          <div className="text">
            <p className="p-grid">Andreea</p>
            <p className="p-grid">Turcu</p>
            <p className="p-grid">
              Data Scientist | Solution Leader - Data Robot
            </p>
          </div>
        </div>
        <div className="square-pic">
          <img src={Andrea} alt="logo-inspiraction" />
        </div>
        <div className="square-pic">
          <img src={Julien} alt="logo-inspiraction" />
        </div>
        <div className="square-two">
          <div className="text-turn">
            <p className="p-grid-turn">Julien</p>
            <p className="p-grid-turn">Boyer</p>
            <p className="p-grid-turn">
              Consultant React/VueJS NodeJS/Symfony | Co-Founder Taiwa
            </p>
          </div>
        </div>
        <div className="square">
          <div className="text">
            <p className="p-grid">Agnès</p>
            <p className="p-grid">Crépet</p>
            <p className="p-grid">
              Head of Software Longevity | IT - Fairphone
            </p>
          </div>
        </div>
        <div className="square-pic">
          <img src={Agnes} alt="logo-inspiraction" />
        </div>
      </div>
      <div className="video-sample-area">
        <div className="video-sample">
          <video controls width="1500">
            <source src={flower} type="video/webm" />
            <track default kind="captions" srcLang="en" />
          </video>
          <div className="divMastHome">
            <h3 className="info-wsc">Un large choix de contenu</h3>
            <p className="video-desc">
              Parcourez l'ensemble de nos masterclasses. La Wild Code School
              vous propose des domaines variés à découvrir, grâce à nos
              différents partenaires et nos nombreux intervenants.
            </p>
            <div className="flex-mbutton">
              <NavLink to="/masterclass">
                <button type="button" className="button-discover">
                  Nos masterclasses
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="search-exemples">
        <div className="first-block">
          <h2>Découvrez de nombreux métiers ...</h2>
          <CarouselSearch />
        </div>
        <div className="second-block">
          <h2>... et différents domaines technologiques.</h2>
          <CarouselSearch />
        </div>
      </div>
      <IntroWCS />
    </div>
  );
}
