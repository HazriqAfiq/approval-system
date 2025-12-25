
import RequestForm from '../components/RequestForm';
import { Container } from '@mui/material';

const HomePage = ({ setRequests }) => {
  return (
    <Container>
      <RequestForm setRequests={setRequests} />
    </Container>
  );
};

export default HomePage;
