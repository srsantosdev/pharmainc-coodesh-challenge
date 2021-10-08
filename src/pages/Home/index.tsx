import { FormEvent, useCallback, useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import * as queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { LoadingMoreButton } from '../../components/LoadingMoreButton';
import { PatientTable } from '../../components/PatientTable';

import { usePatient } from '../../hooks/usePatient';

import { ContainerPage, Content } from '../../styles/pages/home';

export function Home(): JSX.Element {
  const { search } = useLocation();

  const [name, setName] = useState('');

  const {
    loadingMore,
    loading,
    patients,
    openPatientProfile,
    selectPatient,
    loadPatients,
  } = usePatient();

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      await loadPatients({
        name: name ?? undefined,
      });
    },
    [name],
  );

  useEffect(() => {
    async function loadPageData() {
      const result = queryString.parse(search);

      if (result.patientId) {
        selectPatient(result.patientId as string);
        openPatientProfile();
      }
    }

    loadPageData();
  }, [search]);

  return (
    <ContainerPage>
      <Header />

      <Content>
        <p>
          Sua base de clientes para facilitar a gestão e visualização da
          informação dos pacientes de maneira simples e objetiva.
        </p>

        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Nome do paciente"
            activeFilter
            onChange={event => setName(event.target.value)}
          />
          <Button title="Buscar" icon={IoSearch} />
        </form>

        <PatientTable patients={patients} />

        <footer>
          <LoadingMoreButton loading={loading} onClick={loadingMore} />
        </footer>
      </Content>
    </ContainerPage>
  );
}
