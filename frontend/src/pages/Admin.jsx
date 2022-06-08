import "../style/Admin.css";

export default function Admin() {
  return (
    <div className="admin">
      <section className="title">
        <h1>
          <span className="span-title">A</span>dministrateur
        </h1>
      </section>
      <section className="dashboard">
        <p className="text-dashboard">
          <span className="span-number">150</span>
          <br />
          Clients
        </p>
        <p className="text-dashboard">
          <span className="span-number">75</span>
          <br />
          Abonnés
        </p>
        <p className="text-dashboard">
          <span className="span-number">43</span>
          <br />
          Masterclass
        </p>
        <p className="text-dashboard">
          <span className="span-number">240</span>
          <br />
          Ventes
        </p>
      </section>
      <section className="selectTask">
        <div className="select-clients">
          <span className="span-task">C</span>lients
        </div>
        <div className="select-masterclass">
          <span className="span-task">M</span>asterclass
        </div>
      </section>
      <section className="showClients">
        <div className="buttonClient">
          {" "}
          <button>Abonnés</button>
          <button>Non-Abonnés</button>
        </div>
        <div className="abonnes">
          <select className="choose-clients">
            <option>Selection Abonnés</option>
            <option>ook</option>
            <option>ook</option>
            <option>ook</option>
          </select>
        </div>
        <div className="non-abonnes">
          <select className="choose-clients">
            <option>Selection Non-Abonnés</option>
            <option>ook</option>
            <option>ook</option>
            <option>ook</option>
          </select>
        </div>
      </section>
      <section className="showMasterclass">
        <div>
          <select className="thematique">
            <option value="theme">recettes</option>
            <option value="theme">people</option>
            <option value="theme">art</option>
          </select>
        </div>
        <div>
          <select className="selectMasterclass">
            <option value="masterclass">Masterclass 1</option>
            <option value="masterclass">Masterclass 2</option>
            <option value="masterclass">Masterclass 3</option>
          </select>
        </div>
        <div className="buttonPutDelete">
          <button>Modifier</button>
          <button>Supprimer</button>
        </div>
      </section>
      <p>ajouter le sample video de lou</p>
      <section className="addMasterclass">
        <form action="post">
          <label htmlFor="title"></label>
          <input type="text" placeholder="Titre de la video" />
          <label htmlFor=""></label>
          <input type="text" placeholder="Description" />
          <label htmlFor=""></label>
          <input type="text" placeholder="Photo" />
          <label htmlFor=""></label>
          <input type="text" placeholder="Nom célébrité" />
          <label htmlFor=""></label>
          <input type="text" placeholder="Url" />
          <label htmlFor=""></label>
          <input type="text" placeholder="Thématique" />
          <label htmlFor=""></label>
          <input type="text" placeholder="Mots clés" />
          <button>Envoyer</button>
        </form>
      </section>
    </div>
  );
}
