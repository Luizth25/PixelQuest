import { useNavigate } from "react-router-dom";

import { AccessButton, Container } from "./QuickAccessButtons.styles";

const QuickAccessButtons = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <AccessButton onClick={() => navigate("/missions")}>
        📝
        <span>Missões</span>
      </AccessButton>
      <AccessButton onClick={() => navigate("/character")}>
        🧙‍♂️
        <span>Personagem</span>
      </AccessButton>
      <AccessButton onClick={() => navigate("/shop")}>
        🏪
        <span>Loja</span>
      </AccessButton>
    </Container>
  );
};

export default QuickAccessButtons;
