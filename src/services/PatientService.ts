import { format } from 'date-fns';
import { mainApi } from '../apis/main.api';

export type Patient = {
  id: string;
  name: string;
  gender: 'male' | 'female';
  birthday: string;
  email: string;
  location: {
    city: string;
    country: string;
    postcode: string;
    street: string;
    number: string;
    state: string;
  };
  phone: string;
  nationality: string;
  picture: string;
};

export type PatientFilters = {
  readonly gender?: string;
  readonly nationality?: string;
  readonly name?: string;
};

export type GetPatientsInput = {
  readonly page?: number;
  readonly filters?: PatientFilters;
};

interface IPatientService {
  getPatients(input?: GetPatientsInput): Promise<Patient[]>;
  getOnlyPatient(patient_id: string): Promise<Patient>;
}

const KEY_SEED = '@coodesh-challenge:seed';

export class PatientService implements IPatientService {
  private formattedPatient(patient: any): Patient {
    const parsedBirthday = new Date(patient.dob.date);

    const formattedBirthday = format(parsedBirthday, 'dd/MM/yyyy');

    return {
      id: patient.cell,
      gender: patient.gender,
      name: `${patient.name.first} ${patient.name.last}`,
      birthday: formattedBirthday,
      email: patient.email,
      location: {
        city: patient.location.city,
        country: patient.location.country,
        postcode: patient.location.postcode,
        street: patient.location.street.name,
        number: patient.location.street.number,
        state: patient.location.state,
      },
      phone: patient.phone,
      nationality: patient.nat,
      picture: patient.picture.large,
    };
  }

  public async getPatients({
    page,
    filters,
  }: GetPatientsInput): Promise<Patient[]> {
    const ITENS_PER_PAGE = 50;

    const response = await mainApi.get<any>('/', {
      params: {
        gender: filters?.gender ?? undefined,
        nat: filters?.nationality ?? undefined,
        name: filters?.name ?? undefined,
        results: ITENS_PER_PAGE,
        page,
      },
    });

    const patients = response.data.results.map((patient: any) => {
      return this.formattedPatient(patient);
    });

    const { seed } = response.data.info;

    sessionStorage.setItem(KEY_SEED, seed);

    return patients;
  }

  public async getOnlyPatient(patient_id: string): Promise<Patient> {
    const storagedSeed = sessionStorage.getItem(KEY_SEED);

    const response = await mainApi.get<any>('/', {
      params: {
        cell: patient_id,
        seed: storagedSeed || undefined,
      },
    });

    const { seed } = response.data.info;

    sessionStorage.setItem(KEY_SEED, seed);

    const patient = response.data.results[0];

    return this.formattedPatient(patient);
  }
}
