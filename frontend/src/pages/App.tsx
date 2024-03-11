import { AppTopBar } from '../components/AppTopBar';
import { StyledEngineProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import { Dashboard } from './Dashboard';
import { Table } from '../components/Table';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <AppTopBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/dashboard"
          element={
            <Container maxWidth="xl" sx={{ mt: '100px' }}>
              <Table />
            </Container>
          }
        />
      </Routes>
    </StyledEngineProvider>
  );
}

export default App;
