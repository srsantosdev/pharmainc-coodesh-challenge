import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

import { Overlay, Content } from './styles';
import { contentModalVariants, overlayVariants } from './variants';

type ModalProps = {
  isOpen?: boolean;
  setIsOpen?: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  setIsOpen,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          open={isOpen}
          variants={overlayVariants}
          initial="unMounted"
          animate="mounted"
          exit="exit"
        >
          <Content
            variants={contentModalVariants}
            initial="unMounted"
            animate="mounted"
            exit="exit"
          >
            <button
              type="button"
              className="close-button"
              onClick={() => setIsOpen?.()}
              data-testid="close-modal"
            >
              <IoClose />
            </button>

            {children}
          </Content>
        </Overlay>
      )}
    </AnimatePresence>
  );
};
