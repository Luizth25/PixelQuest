import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.card};
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 16px;
`;
