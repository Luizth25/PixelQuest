import Banner from "../../components/Banner";
import styled from "styled-components";
import useLevelStore from "../../store/levelStore/levelStore";
import { useState, useEffect } from "react";
import toggleTaskCompletion from "../../functions/useToggleTaskComplete";
import { MissionType } from "../../types";
import CreateTaskForm from "../../components/CreateTaskForm";
import FilterGroupButtons from "../../components/FilterGroupButtons";
import MissionsList from "../../components/MissionsList";
import XpBar from "../../components/XpBar";

const Page = styled.div`
  padding: 24px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Missions = () => {
  const [missions, setMissions] = useState<MissionType[]>([]);
  const [input, setInput] = useState("");
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">(
    "easy"
  );
  const [filter, setFilter] = useState<"all" | "done" | "active">("all");

  const xp = useLevelStore((state) => state.xp);
  const level = useLevelStore((state) => state.level);
  const addXP = useLevelStore((state) => state.addXp);
  const removeXP = useLevelStore((state) => state.removeXp);

  const getXPValue = (diff: string) =>
    diff === "easy" ? 10 : diff === "medium" ? 25 : 40;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMission: MissionType = {
      id: Date.now(),
      title: input,
      difficulty,
      done: false,
    };

    setMissions((prev) => [...prev, newMission]);
    setInput("");
  };

  const toggleMission = (id: number) => {
    setMissions((prev) =>
      toggleTaskCompletion(
        prev,
        id,
        (task) => addXP(getXPValue(task.difficulty)),
        (task) => removeXP(getXPValue(task.difficulty))
      )
    );
  };

  useEffect(() => {
    fetch("/mock/task.json")
      .then((res) => res.json())
      .then((data) => setMissions(data));
  }, [setMissions]);

  const filteredMissions = missions.filter((mission) => {
    if (filter === "done") return mission.done;
    if (filter === "active") return !mission.done;
    return true;
  });

  return (
    <>
      <Banner icon="📝" title="Missões" />
      <Page>
        <Title>📝 Suas Missões</Title>
        <CreateTaskForm
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />

        <FilterGroupButtons filter={filter} setFilter={setFilter} />

        {filteredMissions.map((mission) => (
          <MissionsList
            key={mission.id}
            mission={mission}
            toggleMission={toggleMission}
          />
        ))}

        <XpBar current={xp} max={100} />
        <p>
          Nível {level} - XP: {xp} / 100
        </p>
      </Page>
    </>
  );
};
export default Missions;
