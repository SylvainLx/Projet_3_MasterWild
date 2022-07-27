import { useState } from "react";
import AnswerDiv from "./AnswerDiv";

export default function ListFAQ() {
  const [selectedOption, setSelectedOption] = useState([]);

  const handleChange = (e) => setSelectedOption(e.target.value);

  const answersFaq = [
    {
      id: "1",
      answer:
        "Nous mettons à disposition des vidéos qui s'adressent à tous les publics. Certaines masterclass sont accessibles sans pré-requis ou connaissances dans un domaine. D'autres masterclass sont plus techniques et à destination de professionnels dans la tech afin de réaliser une veille, mettre à jour ou approfondir ses connaissances.",
    },
    {
      id: "2",
      answer:
        "Nos masterclass sont réalisées sous forme de vidéos conférences avec des speakers professionnels pour apporter de nouvelles connaissances ou faire de la veille. Une formation en ligne propose des modules et/ou des parcours ciblés selon ses objectifs pédagogiques.",
    },
    {
      id: "3",
      answer:
        "L'intégralité de nos contenus est gratuite ! Vous pouvez visionner les Masterclass autant de fois que vous le souhaitez, les ajouter en favoris pour les retrouver facilement.",
    },
    {
      id: "4",
      answer:
        "Les durées des vidéos varient selon la thématique et le speaker. La durée moyenne de nos masterclass est d'1h15.",
    },
    {
      id: "5",
      answer:
        "Nos speakers sont tous des professionnels du numérique et font partie de notre réseau d'entreprises partenaires. Nos speakers sont : des développeurs web / des data anaylstes / des experts de la cybersécurité / des coaches en agilité / des chefs d'entreprise, etc.",
    },
    {
      id: "6",
      answer:
        "La Wild Code School propose des formations à temps plein, à temps partiel et en alternance. Vous êtes curieux, débutant, ou avancé ? À vous de choisir le format adapté à votre niveau ! Vous pouvez vous former dans l'un de nos 12 campus français, ou de chez vous en ligne. Découvrez nos formations sur notre site web : Wild Code School.",
    },
  ];

  return (
    <div className="popularQuestions">
      <p className="pfaq">La réponse à toutes vos questions est ici !</p>
      <select className="selectQuestions" onChange={handleChange}>
        <option value="">---</option>
        <option value="1">À qui s'adresse Wild Masterclass ?</option>
        <option value="2">
          Quelle est la différence avec une formation en ligne ?
        </option>
        <option value="3">Dois-je payer pour accéder aux contenus ?</option>
        <option value="4">Combien de temps dure une Masterclass ?</option>
        <option value="5">Qui anime les Masterclass ?</option>
        <option value="6">
          Je découvre l'univers de la tech, j'envisage de m'orienter ou me
          reconvertir dans la tech et les Masterclass ont confirmé mon projet.
          Comment faire pour me former ??
        </option>
      </select>
      {answersFaq
        .filter((resp) => resp.id === selectedOption)
        .map((resp) => (
          <AnswerDiv key={resp.id} resp={resp.answer} />
        ))}
    </div>
  );
}
