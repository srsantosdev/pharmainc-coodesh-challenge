import styled, { css } from 'styled-components';
import { theme } from '../../global/style/theme';

interface ContainerProps {
  isFocused?: boolean;
  isFilled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${theme.colors.black500};
  width: 100%;
  height: 6rem;

  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.black300};

  display: flex;
  align-items: center;

  padding: 0 1.6rem;

  > input {
    flex: 1;
    height: 6rem;
    border: none;
    background: none;
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: ${theme.colors.primary};
    `}

  ${props =>
    props.isFilled &&
    css`
      border-color: ${theme.colors.primary};
    `}
`;
