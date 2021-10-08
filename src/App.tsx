import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

import { PatientProvider } from './providers/PatientProvider';
import { GlobalStyle } from './global/style/global-style';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <PatientProvider>
        <Routes />
        <GlobalStyle />
      </PatientProvider>
    </BrowserRouter>
  );
}
