import { MissionType } from "../../types";
import { Mission } from "./MissionsList.styles";

type TMissionsProps = {
  mission: MissionType;
  toggleMission: (id: number) => void;
};

const MissionsList = ({ mission, toggleMission }: TMissionsProps) => {
  return (
    <Mission key={mission.id}>
      <input
        type="checkbox"
        checked={mission.done}
        onChange={() => toggleMission(mission.id)}
      />
      {mission.title} ({mission.difficulty})
    </Mission>
  );
};
export default MissionsList;
