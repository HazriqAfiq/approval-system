
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RequestsPage from './pages/RequestsPage';

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
  },
});

function App() {
  const [requests, setRequests] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage requests={requests} setRequests={setRequests} />} />
          <Route path="/requests" element={<RequestsPage requests={requests} setRequests={setRequests} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
