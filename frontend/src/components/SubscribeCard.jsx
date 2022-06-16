import { useState } from "react";

import Checked from "../assets/checked.png";
import CheckedInactive from "../assets/checkedinactive.png";
import Arrow from "../assets/downarrow.png";
import "../style/SubscribeCard.css";

export default function SubscribeCard() {
  const [showButtonOne, setShowButtonOne] = useState(false);
  const handleClickOne = () => {
    setShowButtonOne(!showButtonOne);
  };

  const [showButtonTwo, setShowButtonTwo] = useState(false);
  const handleClickTwo = () => {
    setShowButtonTwo(!showButtonTwo);
  };

  return (
    <div className="sub-area-mobile">
      <h2>2 Offres au choix</h2>
      <div className="sub-mobile">
        <div className="sub-flex-mobile">
          <div className="sub-title-mobile">
            <h3>Vidéo à la demande</h3>
            <p>
              5,99€ /<span> vidéo</span>
            </p>
          </div>
          <div>
            <button
              className="sub-button"
              type="button"
              onClick={handleClickOne}
            >
              <img
                className="arrow"
                src={Arrow}
                alt="flèche pour dérouler le menu"
              />
            </button>
          </div>
        </div>
        {showButtonOne && (
          <div className="sub-open">
            <div className="container-grid">
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
              <button className="options-button" type="button">
                <p>Je choisis cette offre</p>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="sub-mobile">
        <div className="sub-flex-mobile">
          <div className="sub-title-mobile">
            <h3>Abonnement mensuel</h3>
            <p>
              14,99€ /<span> mois</span>
            </p>
          </div>
          <div>
            <button
              className="sub-button"
              type="button"
              onClick={handleClickTwo}
            >
              <img
                className="arrow"
                src={Arrow}
                alt="flèche pour dérouler le menu"
              />
            </button>
          </div>
        </div>
        {showButtonTwo && (
          <div className="sub-open">
            <div className="container-grid">
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
              <button className="options-button" type="button">
                <p>Je choisis cette offre</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
