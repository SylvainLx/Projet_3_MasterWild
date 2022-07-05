import { React } from "react";
import VideoSample from "../VideoSample";
import "../../style/MyMCFavoritesList.css";
import "../../style/VideoSample.css";

export default function MyMCFavoritesList() {
  const videoExemple = [
    {
      name: "Titre de la Vidéo",
      summary:
        "Lorem ipsum dolor sit amet. Id quod deleniti non culpa quod cum temporibus. Lorem ipsum dolor sit amet. Id quod deleniti non culpa quod cum temporibus. Lorem ipsum dolor sit amet. Id quod deleniti non non culpa quod cum temporibus.",
      duration: 45,
      srcPicture: "src/assets/harryroselmack.png",
    },
    {
      name: "Nom de la Vidéo",
      summary:
        "Lorem ipsum dolor sit amet. Id quod deleniti non culpa quod cum temporibus. Lorem ipsum dolor sit amet. Id quod deleniti non culpa quod cum temporibus. Lorem ipsum dolor sit amet. Id quod deleniti non non culpa quod cum temporibus.",
      duration: 30,
      srcPicture: "src/assets/harryroselmack.png",
    },
    {
      name: "Titre de la Masterclass",
      summary:
        "Lorem ipsum dolor sit amet. Id quod deleniti non culpa quod cum temporibus. Lorem ipsum dolor sit amet. Id quod deleniti non culpa quod cum temporibus. Lorem ipsum dolor sit amet. Id quod deleniti non non culpa quod cum temporibus.",
      duration: 15,
      srcPicture: "src/assets/harryroselmack.png",
    },
    {
      name: "Nom de la Masterclass",
      summary:
        "Lorem ipsum dolor sit amet. Id quod deleniti non culpa quod cum temporibus. Lorem ipsum dolor sit amet. Id quod deleniti non culpa quod cum temporibus. Lorem ipsum dolor sit amet. Id quod deleniti non non culpa quod cum temporibus.",
      duration: 7,
      srcPicture: "src/assets/harryroselmack.png",
    },
  ];

  return (
    <div className="show-favorite-videos">
      {videoExemple.map(({ name, summary, duration, srcPicture }) => (
        <VideoSample
          key={name}
          name={name}
          summary={summary}
          duration={duration}
          srcPicture={srcPicture}
        />
      ))}
    </div>
  );
}
