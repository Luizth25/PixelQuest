import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;

export const BarContainer = styled.div`
  width: 100%;
  height: 16px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
  margin-top: 6px;
`;

export const BarFill = styled.div<{ percentage: number }>`
  height: 100%;
  background: ${({ theme }) => theme.colors.gold};
  width: ${({ percentage }) => percentage}%;
  transition: width 0.3s ease;
`;
