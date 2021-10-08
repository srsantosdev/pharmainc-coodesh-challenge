import React, { createContext, useCallback, useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { PatientProfile } from '../components/PatientProfile';
import {
  Patient,
  PatientFilters,
  PatientService,
} from '../services/PatientService';

export type PatientContextData = {
  loading: boolean;
  patients: Patient[];
  isOpenPatientProfile: boolean;
  closePatientProfile: () => void;
  selectPatient: (id: string) => void;
  openPatientProfile: () => void;
  loadPatients: (filters?: PatientFilters, page?: number) => Promise<void>;
  loadingMore: () => void;
  patientService: PatientService;
};

export const PatientContext = createContext({} as PatientContextData);

export const PatientProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const patientService = new PatientService();

  const [loading, setLoading] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState('');
  const [isOpenPatientProfile, setIsOpenPatientProfile] = useState(false);

  const [patients, setPatients] = useState<Patient[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleOpenPatientProfile = useCallback(() => {
    setIsOpenPatientProfile(true);
  }, []);

  const handleClosePatientProfile = useCallback(() => {
    setIsOpenPatientProfile(false);
    setSelectedPatientId('');

    history.push({ search: '' });
  }, []);

  const handleSelectPatient = useCallback((id: string) => {
    setSelectedPatientId(id);
  }, []);

  const handleLoadingMore = useCallback(async () => {
    setLoading(true);

    const page = currentPage + 1;

    const allPatients = await patientService.getPatients({
      page,
    });

    setCurrentPage(page);
    setPatients(state => [...state, ...allPatients]);

    setLoading(false);
  }, [currentPage]);

  const loadPatients = useCallback(
    async (filters?: PatientFilters, page = 1) => {
      const allPatients = await patientService.getPatients({
        page,
        filters: filters || undefined,
      });

      setPatients(allPatients);
    },
    [],
  );

  useEffect(() => {
    loadPatients();
  }, [loadPatients]);

  return (
    <PatientContext.Provider
      value={{
        loading,
        patients,
        patientService,
        isOpenPatientProfile,
        loadingMore: handleLoadingMore,
        selectPatient: handleSelectPatient,
        openPatientProfile: handleOpenPatientProfile,
        closePatientProfile: handleClosePatientProfile,
        loadPatients,
      }}
    >
      {children}

      <PatientProfile
        patientId={selectedPatientId}
        isOpen={isOpenPatientProfile}
        setIsOpen={() => handleClosePatientProfile()}
      />
    </PatientContext.Provider>
  );
};
