import CardMasterclass from "./CardMasterclass";
import "../style/CarouselSearch.css";

export default function CarouselSearch() {
  return (
    <div>
      <section className="carousel">
        <ul className="carousel-items">
          <li className="carousel-item">
            <CardMasterclass />
          </li>
          <li className="carousel-item">
            <CardMasterclass />
          </li>
          <li className="carousel-item">
            <CardMasterclass />
          </li>
          <li className="carousel-item">
            <CardMasterclass />
          </li>
          <li className="carousel-item">
            <CardMasterclass />
          </li>
          <li className="carousel-item">
            <CardMasterclass />
          </li>
        </ul>
      </section>
    </div>
  );
}
