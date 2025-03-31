import styled from "styled-components";

export const FilterGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FilterGroupButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &.active {
    background: ${({ theme }) => theme.colors.primary};
  }
`;
