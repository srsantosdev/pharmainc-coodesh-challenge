import React, { useCallback, useRef, useState } from 'react';
import { useEventListener } from '../../hooks/useEventListener';
import { usePatient } from '../../hooks/usePatient';
import { nationalities } from '../../utils/nationalities';
import Select from '../Select';
import { Gender, SelectGender } from '../SelectGender';

import { Container, GenderContainer, NationalityContainer } from './styles';

interface PatientFilterProps {
  isOpen: boolean;
  onClose: () => void;
}

const PatientFilter: React.FC<PatientFilterProps> = ({ isOpen, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<any>(null);

  const { loadPatients } = usePatient();

  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [selectedNationality, setSelectedNationality] = useState<string | null>(
    null,
  );

  const handleCloseDropdown = useCallback((event: Event) => {
    if (dropdownRef.current?.contains(event.target as Node)) {
      return;
    }

    if (selectRef.current.props.openMenuOnClick) {
      return;
    }

    onClose();
  }, []);

  const handleFilter = useCallback(async () => {
    await loadPatients({
      gender: selectedGender ?? undefined,
      nationality: selectedNationality ?? undefined,
    });

    onClose();
  }, [onClose, loadPatients, selectedGender, selectedNationality]);

  const handleClearFilter = useCallback(() => {
    loadPatients();
    onClose();
  }, [onClose]);

  useEventListener('click', handleCloseDropdown, {
    enabled: isOpen,
  });

  return (
    <Container ref={dropdownRef}>
      <div>
        <h2>Filtros</h2>

        <GenderContainer>
          <label>Gênero</label>

          <SelectGender onChange={value => setSelectedGender(value)} />
        </GenderContainer>

        <NationalityContainer>
          <label>Nacionalidade</label>

          <Select
            ref={selectRef}
            name="nationality"
            options={nationalities.map(nationality => ({
              label: nationality,
              value: nationality,
            }))}
            onChange={(selectedValue: any) => {
              setSelectedNationality(selectedValue.value);
            }}
          />
        </NationalityContainer>

        <footer>
          <button type="button" className="clear" onClick={handleClearFilter}>
            Limpar filtros
          </button>

          <button type="button" className="filter" onClick={handleFilter}>
            Filtrar
          </button>
        </footer>
      </div>
    </Container>
  );
};

export default PatientFilter;
