import PropTypes from "prop-types";

export default function ProList({ pro }) {
  ProList.propTypes = {
    pro: PropTypes.string.isRequired,
  };
  return (
    <div className="proList">
      <p>
        <span className="proSpan">Entreprise N°</span> {pro.Id}
      </p>
      <p>
        <span className="proSpan">Nom : </span> {pro.lastname}
      </p>
      <p>
        <span className="proSpan">Prénom : </span> {pro.firstname}
      </p>
      <p>
        <span className="proSpan">Mail : </span> {pro.email}
      </p>
    </div>
  );
}
