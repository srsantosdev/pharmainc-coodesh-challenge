import React, { ButtonHTMLAttributes } from 'react';
import { IoReload } from 'react-icons/io5';

import { Container } from './styles';

interface LoadingMoreButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
}

export const LoadingMoreButton: React.FC<LoadingMoreButtonProps> = ({
  loading,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <IoReload size={24} />
      <span>{loading ? 'Carregando...' : 'Carregar mais...'}</span>
    </Container>
  );
};
