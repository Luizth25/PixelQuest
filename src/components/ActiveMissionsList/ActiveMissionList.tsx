import { useState } from "react";
import { Container, Mission, Title } from "./ActiveMissionsList.styles";
import useLevelStore from "../../store/levelStore/levelStore";

type TTask = {
  id: number;
  title: string;
  difficulty: "easy" | "medium" | "hard";
  done: boolean;
};

const ActiveMissionsList = () => {
  const addXp = useLevelStore((state) => state.addXp);
  const removeXp = useLevelStore((state) => state.removeXp);

  const [missions, setMissions] = useState<TTask[]>([
    {
      id: 1,
      title: "Derrotar o dragão do Código",
      done: false,
      difficulty: "hard",
    },
    {
      id: 2,
      title: "Terminar componente de tarefas",
      done: false,
      difficulty: "medium",
    },
    { id: 3, title: "Estudar React Router", done: false, difficulty: "easy" },
  ]);

  const getXp = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return 10;
      case "medium":
        return 20;
      case "hard":
        return 40;
      default:
        return 0;
    }
  };

  const handleCheck = (id: number) => {
    setMissions((prev) =>
      prev.map((mission) => {
        if (mission.id === id) {
          const xpAmount = getXp(mission.difficulty);
          if (!mission.done) addXp(xpAmount);
          else removeXp(xpAmount);

          return { ...mission, done: !mission.done };
        }
        return mission;
      })
    );
  };

  return (
    <Container>
      <Title>📋 Missões Ativas</Title>
      {missions.map((mission) => (
        <Mission key={mission.id}>
          <input
            type="checkbox"
            checked={mission.done}
            onClick={() => handleCheck(mission.id)}
          />
          {mission.title} | Dificuldade: {mission.difficulty}
        </Mission>
      ))}
    </Container>
  );
};

export default ActiveMissionsList;
