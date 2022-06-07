import "../style/CardMasterclass.css";

export default function CardMasterclass() {
  const property = {
    theme: "Music",
  };

  return (
    <div className="card-container">
      <img
        src="https://bit.ly/2Z4KKcF"
        alt="Masterclass's caption"
        className="picture-card"
      />

      <div className="information">
        <span className="theme">{property.theme}</span>
        <h2 className="title-card">Titre de la vidéo</h2>
        <p className="description-card">
          Lorem ipsum dolor sit amet. Id quod deleniti non culpa quod
        </p>
        <div className="button">
          <button type="button" className="button-style">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
