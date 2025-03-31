import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;
`;

export const AccessButton = styled.button`
  flex: 1;
  min-width: 120px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 14px 20px;
  border-radius: 10px;
  font-size: 14px;
  transition: background 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
