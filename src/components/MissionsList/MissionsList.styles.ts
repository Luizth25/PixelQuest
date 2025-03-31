import styled from "styled-components";

export const Mission = styled.label`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.card};
  padding: 10px 14px;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  gap: 12px;

  input {
    transform: scale(1.2);
  }
`;
