import styled from 'styled-components';
import { theme } from '../../global/style/theme';

export const Container = styled.section`
  > table {
    width: 100%;
    margin-top: 1rem;
    border-spacing: 0 0.8rem;

    th {
      padding: 1rem 0;
      font-size: 1.2rem;
      text-align: left;
      font-weight: 500;
      color: ${theme.colors.gray};
      padding: 1.6rem;

      &:first-child {
        min-width: 28rem;
      }

      @media (max-width: 740px) {
        display: none;
      }
    }
  }
`;
