import "../style/Admin.css";
import "../style/App.css";

export default function AdminMasterclass() {
  return (
    <div className="admin-masterclass">
      <section className="showMasterclass">
        <div className="selectmaster">
          <select className="thematique">
            <option value="theme">Recettes</option>
            <option value="theme">People</option>
            <option value="theme">Art</option>
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
          <button className="btnPut" type="button">
            Modifier
          </button>
        </div>
        <div className="buttonPutDelete">
          <button className="btnDel" type="button">
            Supprimer
          </button>
        </div>
      </section>
      <section className="sample-video">
        <p>ajouter le sample video de lou</p>
      </section>
      <section className="add-masterclass">
        <form className="form-masterclass" action="post">
          <label htmlFor="title">
            <input
              className="input"
              type="text"
              placeholder="Titre de la video"
            />
          </label>
          <label htmlFor="Mots clés">
            <input className="input" type="text" placeholder="Mots Clés" />
          </label>
          <label htmlFor="Photo">
            <input className="input" type="text" placeholder="Photo" />
          </label>
          <label htmlFor="Name">
            <input className="input" type="text" placeholder="Nom célébrité" />
          </label>
          <label htmlFor="Url">
            <input className="input" type="text" placeholder="Url" />
          </label>
          <label htmlFor="Theme">
            <input className="input" type="text" placeholder="Thématique" />
          </label>
          <label className="desc" htmlFor="Desc">
            <textarea
              className="input i-desc"
              type="text"
              placeholder="Description"
            />
          </label>
          <button className="btnSend" type="button">
            Envoyer
          </button>
        </form>
      </section>
    </div>
  );
}
