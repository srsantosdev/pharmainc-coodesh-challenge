import React from 'react';

import { Patient } from '../../services/PatientService';

import { PatientItem } from '../PatientItem';

import { Container } from './styles';

export type PatientTableProps = {
  patients: Patient[];
};

export const PatientTable: React.FC<PatientTableProps> = ({ patients }) => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Gênero</th>
            <th>Aniversário</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {patients.map(patient => (
            <PatientItem key={patient.id} patient={patient} />
          ))}
        </tbody>
      </table>
    </Container>
  );
};
