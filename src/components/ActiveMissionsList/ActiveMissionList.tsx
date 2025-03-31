import { useEffect, useRef, useState } from "react";
import { Container, Mission, Title } from "./ActiveMissionsList.styles";
import useLevelStore from "../../store/levelStore/levelStore";
import toggleTaskCompletion from "../../functions/useToggleTaskComplete";

type TTask = {
  id: number;
  title: string;
  difficulty: "easy" | "medium" | "hard";
  done: boolean;
};

const ActiveMissionsList = () => {
  const xpInitialized = useRef(false);
  const [missions, setMissions] = useState<TTask[]>([]);

  const addXp = useLevelStore((state) => state.addXp);
  const removeXp = useLevelStore((state) => state.removeXp);

  useEffect(() => {
    fetch("src/mock/task.json")
      .then((res) => res.json())
      .then((data) => setMissions(data));
  }, [setMissions]);

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
      toggleTaskCompletion(
        prev,
        id,
        (task) => addXp(getXp(task.difficulty)),
        (task) => removeXp(getXp(task.difficulty))
      )
    );
  };

  useEffect(() => {
    if (!xpInitialized.current && missions.length > 0) {
      const completedTasks = missions.filter((task) => task.done);
      const xp = completedTasks.reduce(
        (acc, task) => acc + getXp(task.difficulty),
        0
      );
      addXp(xp);
      xpInitialized.current = true;
    }
  }, [missions, addXp]);

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
