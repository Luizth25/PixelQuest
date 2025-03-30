import { Container, Mission, Title } from "./ActiveMissionsList.styles";

const ActiveMissionsList = () => {
  const missions = [
    { id: 1, title: "Derrotar o dragão do Código", done: false },
    { id: 2, title: "Terminar componente de tarefas", done: false },
    { id: 3, title: "Estudar React Router", done: true },
  ];

  return (
    <Container>
      <Title>📋 Missões Ativas</Title>
      {missions.map((mission) => (
        <Mission key={mission.id}>
          <input type="checkbox" checked={mission.done} readOnly />
          {mission.title}
        </Mission>
      ))}
    </Container>
  );
};

export default ActiveMissionsList;
