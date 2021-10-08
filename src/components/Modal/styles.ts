import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { theme } from '../../global/style/theme';

type OverlayProps = {
  open: boolean;
};

export const Overlay = styled(motion.div)<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  z-index: 10;

  background: rgba(0, 0, 0, 0.3);

  display: none;

  ${props =>
    props.open &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

export const Content = styled(motion.main)`
  min-width: 400px;

  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.black300};
  border-radius: 0.4rem;

  position: relative;

  button.close-button {
    position: absolute;
    top: 1.4rem;
    right: 1.4rem;
    z-index: 12;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    background: 0;
    color: ${theme.colors.gray};

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
