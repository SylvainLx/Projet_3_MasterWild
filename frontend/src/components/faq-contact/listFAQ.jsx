import { useState } from "react";
import AnswerDiv from "./AnswerDiv";

export default function ListFAQ() {
  const [selectedOption, setSelectedOption] = useState([]);

  const handleChange = (e) => setSelectedOption(e.target.value);

  const answersFaq = [
    {
      id: "2",
      answer:
        "MasterWild est une plateforme de masterclasses animées par notre communauté tech d’entreprises partenaires.",
    },
    {
      id: "3",
      answer:
        "Les vidéos sont disponibles en ligne sur la plateforme. Avec MasterWild, vous pouvez apprendre et être inspiré à tout moment, n'importe où, y compris sur votre smartphone, votre ordinateur personnel, Apple TV, Chromecast...",
    },
    {
      id: "4",
      answer:
        "MasterWild est une plateforme entièrement gratuite! Vous pouvez voir et revoir nos masterclasses en illimité !",
    },
  ];

  return (
    <div className="popularQuestions">
      <p className="pfaq">La réponse à toutes vos questions est ici !</p>
      <select className="selectQuestions" onChange={handleChange}>
        <option value="2">Qu'est-ce que MasterWild ?</option>
        <option value="3">Où regarder les vidéos ?</option>
        <option value="4">Est-ce un service payant ?</option>
      </select>
      {answersFaq
        .filter((resp) => resp.id === selectedOption)
        .map((resp) => (
          <AnswerDiv key={resp.id} resp={resp.answer} />
        ))}
    </div>
  );
}
