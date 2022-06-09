import "../style/CardMasterclass.css";
import harryroselmack from "../assets/harryroselmack.png";

export default function CardMasterclass() {
  return (
    <div className="card-container">
      <img
        src={harryroselmack}
        alt="Masterclass's caption"
        className="picture-card"
      />

      <div className="information">
        <span className="theme">Music</span>
        <div>
          <h2 className="title-card">Titre de la vidéo</h2>
          <p className="description-card">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="button">
          <button type="button" className="button-style">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
