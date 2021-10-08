import styled from 'styled-components';
import { theme } from '../../global/style/theme';

export const Container = styled.main`
  width: 80rem;

  padding: 2.4rem;
`;

export const ProfileImageContainer = styled.div`
  width: 16rem;

  position: absolute;
  top: -8rem;
  left: 50%;
  transform: translate(-50%);

  > img {
    width: 16rem;
    height: 16rem;
    border-radius: 50%;

    border: 3px solid ${theme.colors.black300};
  }
`;

export const ProfileMainInfo = styled.div`
  margin: 8rem 0 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 2.4rem;
    color: ${theme.colors.white};
    font-weight: 600;
    margin-bottom: 0.4rem;
  }

  > span {
    font-size: 1.4rem;
    color: ${theme.colors.gray};
  }
`;

export const ProfileContent = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 4rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1.2rem;
    color: ${theme.colors.gray};
  }

  strong {
    font-weight: 500;
  }

  & + div {
    margin-top: 1.6rem;
  }
`;

export const CopyInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  button {
    width: max-content;
    height: max-content;
    background: none;
    border: 0;

    display: flex;
    align-items: center;
    gap: 0.4rem;

    > svg {
      width: 1.6rem;
      height: 1.6rem;
    }

    > span {
      color: inherit;
    }

    &.success {
      color: ${theme.colors.success};
    }
  }
`;
