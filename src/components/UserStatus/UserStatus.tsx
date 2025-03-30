import { Character } from "../../types";
import { Container } from "./UserStatus.styles";

type TUserStatusProps = {
  avatar: Character;
  name: string;
  level: number;
  charClass: string;
};

const UserStatus = ({ avatar, name, level, charClass }: TUserStatusProps) => {
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
