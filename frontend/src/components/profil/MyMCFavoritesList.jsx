/* eslint-disable camelcase */
import { useContext } from "react";
import CurrentUserContext from "../../contexts/currentUser";
import VideoSample from "../VideoSample";
import "../../style/MyMCFavoritesList.css";
import "../../style/VideoSample.css";

export default function MyMCFavoritesList() {
  const { userProfil } = useContext(CurrentUserContext);

  return (
    <div className="show-favorite-videos">
      {userProfil.favorites ? (
        userProfil.favorites.map((favorite) => (
          <VideoSample
            masterclassId={favorite}
            key={`${favorite}_${userProfil.Id}`}
          />
        ))
      ) : (
        <p>Votre liste de favori est vide.</p>
      )}
    </div>
  );
}
