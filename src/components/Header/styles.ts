import styled from 'styled-components';
import { theme } from '../../global/style/theme';

export const Container = styled.header`
  width: 100%;
  height: 10rem;

  background: ${theme.colors.black500};
  border-bottom: 1px solid ${theme.colors.black300};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 14rem;
  }

  > button {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: none;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid ${theme.colors.black300};

    > img {
      width: 4.6rem;
      height: 4.6rem;
      border-radius: 50%;
    }
  }
`;
