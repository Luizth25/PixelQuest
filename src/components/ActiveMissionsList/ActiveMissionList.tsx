import { useEffect } from "react";
import { Container, Mission, Title } from "./ActiveMissionsList.styles";
import useLevelStore from "../../store/levelStore/levelStore";
import useTaskStore from "../../store/useTaskStores";

const ActiveMissionsList = () => {
  const addXp = useLevelStore((state) => state.addXp);
  const removeXp = useLevelStore((state) => state.removeXp);
  const { fetchTasks, tasks, toggleTask } = useTaskStore();

  useEffect(() => {
    const fetchData = async () => {
      await fetchTasks();
    };

    fetchData();
  }, [fetchTasks]);

  const handleCheck = async (id: number) => {
    const tarefa = tasks.find((t) => t.id === id);
    if (!tarefa) return;

    const doneQuest = !tarefa.done;

    await toggleTask(id, doneQuest);

    if (doneQuest) {
      addXp(getXp(tarefa.difficulty));
    } else {
      removeXp(getXp(tarefa.difficulty));
    }
  };

  return (
    <Container>
      <Title>📋 Missões Ativas</Title>
      {tasks.map((mission) => (
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
