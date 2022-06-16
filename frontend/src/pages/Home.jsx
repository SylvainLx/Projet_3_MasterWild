import CarouselHome from "../components/CarouselHome";
import SubscribeCard from "../components/SubscribeCard";
import Harry from "../assets/harryroselmack.png";
import Xavier from "../assets/xavierniel.png";
import LogoBleu from "../assets/logoattente.png";
import flower from "../assets/flower.webm";
import Checked from "../assets/checked.png";
import CheckedInactive from "../assets/checkedinactive.png";
import "../style/Home.css";

export default function Home() {
  return (
    <div className="container-home">
      <div className="top-page">
        <div className="logo-top">
          <h1>
            <img src={LogoBleu} alt="logo-inspiraction" />
          </h1>
        </div>
        <div className="intro-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1 500s, when an unknown printer took a galley of type
            and scrambled it to make.
          </p>
        </div>
      </div>
      <div className="carousel-home">
        <CarouselHome />
      </div>
      <div className="home-mosaic">
        <div className="square">
          <div className="text">
            <p>Prénom</p> <p>Nom</p> <p>Métier</p>
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
            <p>Prénom</p> <p>Nom</p> <p>Métier</p>
          </div>
        </div>
        <div className="square">
          <div className="text">
            <p>Prénom</p> <p>Nom</p> <p>Métier</p>
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
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1 500s, when an unknown printer took a galley of type
            and scrambled it to make. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1 500s, when an
            unknown printer took a galley of type and scrambled it to make.
          </p>
        </div>
      </div>
      <div className="subscribe-mobile">
        <SubscribeCard />
      </div>
      <div className="subscribing-area">
        <h2>2 Offres au choix</h2>
        <div className="subscribe-container">
          <div className="subscribe">
            <div className="subscribe-flex">
              <div className="subscribe-title">
                <h3>Vidéo à la demande</h3>
                <p>
                  5,99€ /<span> vidéo</span>
                </p>
              </div>
            </div>
            <div className="options-grid">
              <div className="box-1">
                <img className="check-logo" src={Checked} alt="logo checked" />
              </div>
              <div className="box-2">
                <p>option une</p>
              </div>
              <div className="box-3">
                <img className="check-logo" src={Checked} alt="logo checked" />
              </div>
              <div className="box-4">
                <p>option deux</p>
              </div>
              <div className="box-5">
                <img
                  className="check-logo"
                  src={CheckedInactive}
                  alt="logo checked"
                />
              </div>
              <div className="box-6">
                <p>option trois</p>
              </div>
              <div className="box-7">
                <img
                  className="check-logo"
                  src={CheckedInactive}
                  alt="logo checked"
                />
              </div>
              <div className="box-8">
                <p>option quatre</p>
              </div>
              <div className="box-9">
                <img
                  className="check-logo"
                  src={CheckedInactive}
                  alt="logo checked"
                />
              </div>
              <div className="box-10">
                <p>option cinq</p>
              </div>
            </div>
            <div className="flex-button">
              <button type="button" className="subscribe-button">
                Je choisis cette offre
              </button>
            </div>
          </div>
          <div className="subscribe">
            <div className="subscribe-flex">
              <div className="subscribe-title">
                <h3>Abonnement mensuel</h3>
                <p>
                  14,99€ /<span> mois</span>
                </p>
              </div>
            </div>
            <div className="options-grid">
              <div className="box-1">
                <img className="check-logo" src={Checked} alt="logo checked" />
              </div>
              <div className="box-2">
                <p>option une</p>
              </div>
              <div className="box-3">
                <img className="check-logo" src={Checked} alt="logo checked" />
              </div>
              <div className="box-4">
                <p>option deux</p>
              </div>
              <div className="box-5">
                <img className="check-logo" src={Checked} alt="logo checked" />
              </div>
              <div className="box-6">
                <p>option trois</p>
              </div>
              <div className="box-7">
                <img className="check-logo" src={Checked} alt="logo checked" />
              </div>
              <div className="box-8">
                <p>option quatre</p>
              </div>
              <div className="box-9">
                <img className="check-logo" src={Checked} alt="logo checked" />
              </div>
              <div className="box-10">
                <p>option cinq</p>
              </div>
            </div>
            <div className="flex-button">
              <button type="button" className="subscribe-button">
                Je choisis cette offre
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
