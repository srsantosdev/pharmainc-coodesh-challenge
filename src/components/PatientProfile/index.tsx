import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Modal } from '../Modal';
import { usePatient } from '../../hooks/usePatient';
import { Patient } from '../../services/PatientService';

import {
  Container,
  ProfileImageContainer,
  ProfileMainInfo,
  ProfileContent,
  Info,
  CopyInfoContainer,
} from './styles';

interface PatientProfileProps {
  isOpen?: boolean;
  setIsOpen?: () => void;
  patientId: string;
}

export const PatientProfile: React.FC<PatientProfileProps> = ({
  isOpen,
  setIsOpen,
  patientId,
}) => {
  const { patientService } = usePatient();
  const [patient, setPatient] = useState({} as Patient);

  const [copiedID, setCopiedID] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const handleCloseModal = useCallback(() => {
    setPatient({} as Patient);
    setIsOpen?.();
  }, [setIsOpen]);

  const translateGender = useMemo(
    () => ({
      male: 'Masculino',
      female: 'Feminino',
    }),
    [],
  );

  useEffect(() => {
    async function loadData() {
      try {
        const patientResult = await patientService.getOnlyPatient(patientId);

        setPatient(patientResult);
      } catch {
        console.log('Falha ao carregar paciente.');
      }
    }

    loadData();
  }, [patientId]);

  return (
    <Modal isOpen={isOpen} setIsOpen={handleCloseModal}>
      <Container>
        <ProfileImageContainer>
          <img src={patient.picture} alt={patient.name} />
        </ProfileImageContainer>

        <ProfileMainInfo>
          <h2>{patient.name}</h2>
          <span>{patient.email}</span>
        </ProfileMainInfo>

        <ProfileContent>
          <div>
            <Info>
              <span>Gênero</span>
              <strong>{translateGender[patient.gender]}</strong>
            </Info>
            <Info>
              <span>Data de nascimento</span>
              <strong>{patient.birthday}</strong>
            </Info>
            <Info>
              <span>Telefone</span>
              <strong>{patient.phone}</strong>
            </Info>
            <Info>
              <span>Nacionalidade</span>
              <strong>{patient.nationality}</strong>
            </Info>
          </div>

          <div>
            <Info>
              <span>ID (Número de identificação)</span>
              <CopyInfoContainer>
                <strong>{patient.id}</strong>
                <CopyToClipboard
                  text={patient.id}
                  onCopy={() => setCopiedID(true)}
                >
                  <button type="button" className={copiedID ? 'success' : ''}>
                    <IoCopyOutline />
                    {copiedID && <span>Copiado!</span>}
                  </button>
                </CopyToClipboard>
              </CopyInfoContainer>
            </Info>

            <Info>
              <span>URL de compartilhamento</span>
              <CopyInfoContainer>
                <strong>{`${process.env.REACT_APP_URL}/?patientId=${patient.id}`}</strong>

                <CopyToClipboard
                  text={`${process.env.REACT_APP_URL}/?patientId=${patient.id}`}
                  onCopy={() => setCopiedUrl(true)}
                >
                  <button type="button" className={copiedUrl ? 'success' : ''}>
                    <IoCopyOutline />
                    {copiedUrl && <span>Copiado!</span>}
                  </button>
                </CopyToClipboard>
              </CopyInfoContainer>
            </Info>
            <Info>
              <span>Endereço</span>
              <strong>
                {patient.location?.street}, ${patient.location?.number} - CEP:{' '}
                {patient.location?.postcode} <br />
                {patient.location?.city} - {patient.location?.state} -{' '}
                {patient.location?.country}
              </strong>
            </Info>
          </div>
        </ProfileContent>
      </Container>
    </Modal>
  );
};
