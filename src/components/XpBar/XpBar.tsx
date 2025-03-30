import { BarContainer, BarFill, Wrapper } from "./XpBar.styles";

interface IXPBarProps {
  current: number;
  max: number;
}

const XpBar = ({ current, max }: IXPBarProps) => {
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
