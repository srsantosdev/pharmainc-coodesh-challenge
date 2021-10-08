import { AnimatePresence } from 'framer-motion';
import React, { useCallback, useState } from 'react';
import { IoOptionsOutline } from 'react-icons/io5';
import PatientFilter from '../PatientFilter';
import { variants } from './variants';

import { Container, Content, FilterButton } from './styles';

export const Filter: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleToggleOpenFilter = useCallback(() => {
    setIsFilterOpen(oldState => !oldState);
  }, []);

  const handleCloseFilter = useCallback(() => {
    setIsFilterOpen(false);
  }, []);

  return (
    <Container>
      <FilterButton
        type="button"
        onClick={handleToggleOpenFilter}
        isActive={isFilterOpen}
      >
        <IoOptionsOutline size={20} />
      </FilterButton>

      <AnimatePresence>
        {isFilterOpen && (
          <Content
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <PatientFilter isOpen={isFilterOpen} onClose={handleCloseFilter} />
          </Content>
        )}
      </AnimatePresence>
    </Container>
  );
};
