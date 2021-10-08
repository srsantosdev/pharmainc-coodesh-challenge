import React from 'react';

import pharmainclogo from '../../assets/logo.svg';
import { Container, Content } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={pharmainclogo} alt="Pharma Inc" />

        <button type="button">
          <img src="https://github.com/srsantosdev.png" alt="Samuel Ramos" />
        </button>
      </Content>
    </Container>
  );
};
