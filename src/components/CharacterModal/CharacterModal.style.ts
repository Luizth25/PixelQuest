import styled from "styled-components";

export const AvatarGrid = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-top: 20px;
`;

export const AvatarButton = styled.button<{ selected: boolean }>`
  border: 3px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.primary : "transparent"};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.card};
  transition: border 0.2s;

  img {
    width: 80px;
    height: 80px;
  }
`;
