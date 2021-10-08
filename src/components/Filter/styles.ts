import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { theme } from '../../global/style/theme';

interface FilterButtonProps {
  isActive?: boolean;
}

export const Container = styled.div`
  position: relative;
`;

export const Content = styled(motion.div)`
  position: absolute;
  top: 3rem;
  right: -1.7rem;
  z-index: 10;
`;

export const FilterButton = styled.button<FilterButtonProps>`
  background: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: color 0.2s;

  ${props =>
    props.isActive &&
    css`
      color: ${theme.colors.blue300};
    `}

  &:hover {
    color: ${theme.colors.blue300};
  }
`;
