import styled from 'styled-components';
import { theme } from '../../global/style/theme';

export const Container = styled.button`
  width: 100%;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  border: 0;
  background: ${theme.colors.primary};
  border-radius: 0.5rem;

  transition: filter 0.2s;

  > span {
    font-weight: 600;
    color: ${theme.colors.white};
  }

  > svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    filter: brightness(0.7);
  }
`;
