import useLevelStore from "../../store/levelStore/levelStore";
import { Character } from "../../types";
import { Container } from "./UserStatus.styles";

type TUserStatusProps = {
  avatar: Character;
  name: string;
  charClass: string;
};

const UserStatus = ({ avatar, name, charClass }: TUserStatusProps) => {
  const level = useLevelStore((state) => state.level);

  return (
    <Container>
      <div>
        <h2>{name}</h2>
        <p>
          Nível {level} | Classe: {charClass}
        </p>
      </div>
      <img
        src={`src/images/avatars/${avatar}.png`}
        alt="Avatar"
        width={64}
        height={64}
      />
    </Container>
  );
};

export default UserStatus;
