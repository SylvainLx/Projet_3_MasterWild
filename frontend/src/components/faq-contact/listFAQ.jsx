import { useState } from "react";
import AnswerDiv from "./AnswerDiv";

export default function ListFAQ() {
  const [selectedOption, setSelectedOption] = useState([]);

  const handleChange = (e) => setSelectedOption(e.target.value);

  const answersFaq = [
    {
      id: "1",
      answer: "INSPIR/ACTION est une plateforme de masterclass.",
    },
    {
      id: "2",
      answer: "INSPIR/ACTION est une plateforme de masterclass.",
    },
    {
      id: "3",
      answer: "Les vidéos sont disponibles en ligne sur la plateforme.",
    },
    {
      id: "4",
      answer:
        "Vous pouvez choisir d'opter pour de la VOD ou bien un abonnement mensuel donnant accès à l'ensemble des masterclass.",
    },
    {
      id: "5",
      answer:
        "Vous pouvez résilier votre abonnement depuis votre espace personnel ou bien en contactant le service client.",
    },
  ];

  return (
    <div className="popularQuestions">
      <select className="selectQuestions" onChange={handleChange}>
        <option value="1">Questions fréquentes</option>
        <option value="2">Qu'est-ce qu'INSPIR/ACTION ?</option>
        <option value="3">Où regarder les vidéos ?</option>
        <option value="4">Quel offre choisir ?</option>
        <option value="5">Comment résilier mon abonnement ?</option>
      </select>
      {answersFaq
        .filter((resp) => resp.id === selectedOption)
        .map((resp) => (
          <AnswerDiv key={resp.id} resp={resp.answer} />
        ))}
    </div>
  );
}
