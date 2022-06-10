import "../style/Paiement.css";

export default function Paiement() {
  return (
    <div className="container-paiement">
      <div className="header-paiement">
        <h2 className="titleh2">
          Plus qu'une <span className="monoLetter">E</span>tape!
        </h2>
      </div>
      <div className="abonnement">
        <h1>Abonnement</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been.
        </p>
      </div>
      <div>
        <h2>Payez en ligne</h2>
        <form className="formPaiement">
          <label htmlFor="cardName" className="cardName">
            <input
              className=""
              type="text"
              name="name"
              id="cardName"
              placeholder="Nom"
              required
            />
            Nom sur la carte
          </label>
          <label htmlFor="cardNumber" className="cardNumber">
            <input
              className=""
              type="number"
              name="name"
              id="cardName"
              placeholder="&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;"
              required
            />
            N° de carte
          </label>
          <div>
            <label htmlFor="cardNumber" className="cardNumber">
              <input
                className=""
                type="number"
                name="name"
                id="cardName"
                placeholder="MM/AA"
                required
              />
              Date d'expiration
            </label>
            <label htmlFor="cardNumber" className="cardNumber">
              <input
                className=""
                type="number"
                name="name"
                id="cardName"
                placeholder="&bull;&bull;&bull;"
                required
              />
              Cryptogramme visuel
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
