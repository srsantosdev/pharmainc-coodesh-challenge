import { useContext } from 'react';
import {
  PatientContext,
  PatientContextData,
} from '../providers/PatientProvider';

export function usePatient(): PatientContextData {
  const context = useContext(PatientContext);

  return context;
}
