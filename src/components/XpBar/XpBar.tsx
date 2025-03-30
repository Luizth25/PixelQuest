import { BarContainer, BarFill, Wrapper } from "./XpBar.styles";

type TXPBarProps = {
  current: number;
  max: number;
};

const XpBar = ({ current, max }: TXPBarProps) => {
  const percentage = Math.min(100, Math.floor((current / max) * 100));

  return (
    <Wrapper>
      XP: {current} / {max}
      <BarContainer>
        <BarFill percentage={percentage} />
      </BarContainer>
    </Wrapper>
  );
};

export default XpBar;
