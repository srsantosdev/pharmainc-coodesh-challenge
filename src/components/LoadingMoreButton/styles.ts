import styled from 'styled-components';
import { theme } from '../../global/style/theme';

export const Container = styled.button`
  border: 0;
  background: 0;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  color: ${theme.colors.blue300};
  opacity: 0.5;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;
