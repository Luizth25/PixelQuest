import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;

  input,
  select {
    padding: 8px;
    font-size: 14px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border: none;
    border-radius: 8px;
    padding: 8px 12px;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
