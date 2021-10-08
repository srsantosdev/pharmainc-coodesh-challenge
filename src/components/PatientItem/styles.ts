import styled from 'styled-components';
import { theme } from '../../global/style/theme';

export const Container = styled.tr`
  transition: filter 0.2s;
  user-select: none;

  > td {
    padding: 1.6rem;

    border: 0;
    background: ${theme.colors.black500};

    > button {
      border: 0;
      background: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: filter 0.2s;

      color: ${theme.colors.gray};

      &:hover {
        filter: brightness(0.7);
      }
    }
  }

  td:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  td:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
  }

  &:hover {
    > td:first-child {
      color: ${theme.colors.primary};
    }

    filter: brightness(0.9);
  }
`;
