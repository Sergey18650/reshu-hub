import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  width: 100%;
  padding: 38px 40px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const Content = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 1200px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Logo = styled('div')`
  width: 263px;
  height: 141px;
  background-color: ${({ theme }) => theme.palette.background.default};
`;