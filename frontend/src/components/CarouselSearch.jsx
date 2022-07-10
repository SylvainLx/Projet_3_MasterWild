/* eslint-disable react/prop-types */
import CardMasterclass from "./CardMasterclass";
import "../style/CarouselSearch.css";

export default function CarouselSearch({ mastercard }) {
  return (
    <div>
      <section className="carousel">
        <ul className="carousel-items">
          <li className="carousel-item">
            <CardMasterclass key={mastercard.id} mastercard={mastercard} />
          </li>
        </ul>
      </section>
    </div>
  );
}
