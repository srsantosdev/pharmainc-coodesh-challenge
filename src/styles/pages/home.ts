import styled from 'styled-components';

export const ContainerPage = styled.div``;

export const Content = styled.main`
  width: 100%;
  max-width: 72rem;
  margin: 4rem auto;

  > p {
    font-size: 1.6rem;
    line-height: 2.4rem;

    color: rgba(255, 255, 255, 0.64);
  }

  > form {
    display: grid;
    grid-template-columns: 1fr 20rem;
    grid-gap: 0.8rem;

    margin-top: 4.8rem;
  }

  > footer {
    margin-top: 6.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
