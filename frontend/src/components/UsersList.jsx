import PropTypes from "prop-types";

export default function UsersList({ users }) {
  UsersList.propTypes = {
    users: PropTypes.string.isRequired,
  };
  return (
    <div className="usersList">
      <p>
        <span className="usersSpan">Utilisateur n°</span> {users.Id}
      </p>
      <p>
        <span className="usersSpan">Nom : </span> {users.lastname}
      </p>
      <p>
        <span className="usersSpan">Prénom : </span> {users.firstname}
      </p>
      <p>
        <span className="usersSpan">Mail : </span> {users.email}
      </p>
      {users.birthday_date && (
        <p>
          <span className="usersSpan">Anniversaire :</span>
          {users.birthday_date}
        </p>
      )}
    </div>
  );
}
