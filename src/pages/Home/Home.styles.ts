import styled from "styled-components";

export const ChangeAvatarButton = styled.button`
  margin: 20px 0;
  align-self: flex-end;
  padding: 12px 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  font-size: 14px;
`;

export const MainContainer = styled.main`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
`;
