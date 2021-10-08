import React, { useCallback, useMemo } from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import { usePatient } from '../../hooks/usePatient';
import { Patient } from '../../services/PatientService';

import { Container } from './styles';

interface PatientItemProps {
  patient: Patient;
}

export const PatientItem: React.FC<PatientItemProps> = ({ patient }) => {
  const { openPatientProfile, selectPatient } = usePatient();
  const history = useHistory();

  const translateGender = useMemo(
    () => ({
      male: 'Masculino',
      female: 'Feminino',
    }),
    [],
  );

  const handleViewPatient = useCallback((id: string) => {
    selectPatient(id);
    openPatientProfile();

    history.push({
      search: `?patientId=${id}`,
    });
  }, []);

  return (
    <Container>
      <td>{patient.name}</td>
      <td>{translateGender[patient.gender]}</td>
      <td>{patient.birthday}</td>

      <td>
        <button type="button" onClick={() => handleViewPatient(patient.id)}>
          <IoDocumentTextOutline size={20} />
        </button>
      </td>
    </Container>
  );
};
