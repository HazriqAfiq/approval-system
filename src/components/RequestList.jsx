
import { Box, Typography } from '@mui/material';
import RequestItem from './RequestItem';

const RequestList = ({ requests, setRequests }) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5">Pending Requests</Typography>
      {requests
        .filter((request) => request.status === 'pending')
        .map((request) => (
          <RequestItem
            key={request.id}
            request={request}
            setRequests={setRequests}
          />
        ))}
    </Box>
  );
};

export default RequestList;
