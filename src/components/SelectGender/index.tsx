import React, { useCallback, useEffect, useState } from 'react';

import { Container, GenderButton } from './styles';

export type Gender = 'male' | 'female';

type SelectGenderProps = {
  onChange?: (value: Gender | null) => void;
};

export const SelectGender: React.FC<SelectGenderProps> = ({ onChange }) => {
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);

  const handleSelectedGender = useCallback((value: Gender) => {
    setSelectedGender(value);
  }, []);

  useEffect(() => {
    onChange?.(selectedGender);
  }, [onChange, selectedGender]);

  return (
    <Container>
      <GenderButton
        type="button"
        isSelected={selectedGender === 'female'}
        onClick={() => handleSelectedGender('female')}
      >
        Feminino
      </GenderButton>

      <GenderButton
        type="button"
        isSelected={selectedGender === 'male'}
        onClick={() => handleSelectedGender('male')}
      >
        Masculino
      </GenderButton>
    </Container>
  );
};
