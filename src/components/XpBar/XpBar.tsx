import useLevelStore from "../../store/levelStore/levelStore";
import { BarContainer, BarFill, Wrapper } from "./XpBar.styles";

type TXPBarProps = {
  current: number;
  max: number;
};

const XpBar = ({ current, max }: TXPBarProps) => {
  const xp = useLevelStore((state) => state.xp);

  return (
    <Wrapper>
      XP: {current} / {max}
      <BarContainer>
        <BarFill percentage={(xp / 100) * 100} />
      </BarContainer>
    </Wrapper>
  );
};

export default XpBar;
