import { React } from "react";
import VideoSample from "./VideoSample";
import "../style/MyMCFavoritesList.css";

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
        "Bla blabla blablabla bla. Bla blabla blablabla bla. Bla blabla blablabla bla. Bla blabla blablabla bla. Bla blabla blablabla bla. Bla blabla blablabla bla.",
      duration: 7,
      srcPicture: "src/assets/harryroselmack.png",
    },
    {
      name: "Titre de la Masterclass",
      summary:
        "Blu blublu blublublu blu. Blu blublu blublublu blu. Blu blublu blublublu blu. Blu blublu blublublu blu. Blu blublu blublublu blu. Blu blublu blublublu blu.",
      duration: 15,
      srcPicture: "src/assets/harryroselmack.png",
    },
    {
      name: "Nom de la Masterclasse",
      summary:
        "Blo bloblo blobloblo blo. Blo bloblo blobloblo blo. Blo bloblo blobloblo blo. Blo bloblo blobloblo blo. Blo bloblo blobloblo blo. Blo bloblo blobloblo blo.",
      duration: 7,
      srcPicture: "src/assets/harryroselmack.png",
    },
  ];

  return (
    <div>
      {videoExemple.map(({ name, summary, duration, srcPicture }, index) => (
        <VideoSample
          key={name.index}
          name={name}
          summary={summary}
          duration={duration}
          srcPicture={srcPicture}
        />
      ))}
    </div>
  );
}
