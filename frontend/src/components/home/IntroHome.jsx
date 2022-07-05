import { NavLink } from "react-router-dom";

export default function IntroHome() {
  return (
    <div className="top-page">
      <h2 className="info-top">
        Toutes les <span className="accent">masterclasses</span> de la Wild Code
        School,
        <br />
        accessibles en <span className="accent">illimité</span> !
      </h2>
      <div className="intro-text">
        <p>
          Vous êtes un expert dans le domaine de la tech et vous souhaitez faire
          de la veille, découvrir un logiciel ou assister à une démonstration ?
          Vous découvrez l’univers de la tech et vous souhaitez apprendre de
          nouvelles notions dans ce domaine ?
          <br />
          <br />
          Que vous soyez débutants ou confirmés, vous trouverez forcément votre
          bonheur ! Nous proposons un catalogue riche de masterclass animées par
          notre communauté tech d’entreprises partenaires.
          <br />
          <br />
          Découvrez ou approfondissez vos connaissances grâce à nos experts en
          machine learning, head of data, développeur full stack, ingénieur en
          cyber sécurité, CTO, etc.
        </p>
      </div>
      <div className="flex-button">
        <NavLink to="/masterclass">
          <button type="button" className="button-discover">
            Nos masterclasses
          </button>
        </NavLink>
      </div>
    </div>
  );
}
