import styled from 'styled-components';
import { theme } from '../../global/style/theme';

export const Container = styled.div`
  width: 47rem;
  padding: 2.4rem;

  border-radius: 0.5rem;
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.black300};

  div > h2 {
    font-weight: 600;
    font-size: 1.6rem;
  }

  div > footer {
    margin-top: 3.2rem;

    display: flex;
    justify-content: flex-end;

    > button {
      font-size: 1.4rem;

      border: 0;
      background: none;

      transition: filter 0.2s;

      & + button {
        margin-left: 1.6rem;
      }

      &:first-child {
        color: ${theme.colors.gray};
      }

      &:last-child {
        color: ${theme.colors.primary};
        font-weight: 600;
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;

export const GenderContainer = styled.div`
  margin-top: 1.6rem;

  > label {
    font-size: 1.2rem;
    color: ${theme.colors.gray};
    display: block;
    margin-bottom: 0.8rem;
  }
`;

export const NationalityContainer = styled.div`
  margin-top: 1.6rem;

  > label {
    font-size: 1.2rem;
    color: ${theme.colors.gray};
    display: block;
    margin-bottom: 0.8rem;
  }
`;
