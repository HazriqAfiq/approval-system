
import RequestList from '../components/RequestList';
import { Container } from '@mui/material';

const RequestsPage = ({ requests, setRequests }) => {
  return (
    <Container>
      <RequestList requests={requests} setRequests={setRequests} />
    </Container>
  );
};

export default RequestsPage;
