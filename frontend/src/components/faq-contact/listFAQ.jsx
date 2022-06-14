import Select from "react-select";

export default function ListFAQ() {
  const options = [
    { value: "reccurentquestions", label: "Questions fréquentes" },
    { value: "inspiraction", label: "Qu'est-ce qu'INSPIR/ACTION ?" },
    { value: "videos", label: "Où regarder les vidéos ?" },
    { value: "offre", label: "Quel offre choisir ?" },
    { value: "vanabonnementilla", label: "Comment résilier mon abonnement ?" },
  ];

  return (
    <div className="popularQuestions">
      <Select
        defaultValue={options[0]}
        options={options}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "rgba(239, 73, 87, 0.6)",
            primary: "#ef4957",
          },
        })}
      />
    </div>
  );
}
