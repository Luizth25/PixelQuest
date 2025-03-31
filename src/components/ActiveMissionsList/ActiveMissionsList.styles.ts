import styled from "styled-components";
export const Container = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.h3`
  margin-bottom: 12px;
`;

export const Mission = styled.label`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.card};
  padding: 10px 14px;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  gap: 12px;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.tertiary};
  }

  input {
    transform: scale(1.2);
  }
`;
