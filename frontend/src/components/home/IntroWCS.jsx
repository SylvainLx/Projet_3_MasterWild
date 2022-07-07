import Monitor from "../../assets/pictures/homepage/monitor.jpg";

export default function IntroWCS() {
  return (
    <div className="down-page">
      <h3 className="info-wsc">Qui sommes-nous ?</h3>
      <div className="intro-wsc">
        <div>
          <p>
            La Wild Code School est une école européenne qui propose des
            programmes de formation tout au long de la vie aux métiers Tech à
            travers une vingtaine de campus, à distance ou au sein
            d’entreprises.
            <br />
            Notre pédagogie hybride, basée sur la pratique et la réalisation de
            projets, associe notre plateforme éducative à un réseau de plus de
            50 formateurs dédiés.
            <br />
            Nous sommes convaincus qu’apprendre est en passe de devenir la
            principale occupation humaine. Nous soutenons cette vision en
            proposant à nos élèves un environnement d'apprentissage accueillant
            et bienveillant.
            <br />
            Notre communauté internationale de plus de 5 000 élèves et alumni se
            rassemble autour des trois valeurs qui nous sont chères : passion,
            innovation et humanité.
          </p>
          <div className="flex-button">
            <a
              href="https://www.wildcodeschool.com/fr-FR"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="button-plus">
                En savoir plus
              </button>
            </a>
          </div>
        </div>

        <img className="picIntro-wsc" src={Monitor} alt="monitor" />
      </div>
    </div>
  );
}
