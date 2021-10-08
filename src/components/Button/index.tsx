import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.FC;
  title: string;
}

export const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  title,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      <span>{title}</span>
    </Container>
  );
};
