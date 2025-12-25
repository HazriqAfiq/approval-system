
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const RequestItem = ({ request, setRequests }) => {
  const handleApprove = () => {
    setRequests((prevRequests) =>
      prevRequests.map((r) =>
        r.id === request.id ? { ...r, status: 'approved' } : r
      )
    );
  };

  const handleReject = () => {
    setRequests((prevRequests) =>
      prevRequests.map((r) =>
        r.id === request.id ? { ...r, status: 'rejected' } : r
      )
    );
  };

  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6">{request.name}</Typography>
        <Typography>{request.details}</Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="success" onClick={handleApprove} sx={{ mr: 1 }}>
            Approve
          </Button>
          <Button variant="contained" color="error" onClick={handleReject}>
            Reject
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RequestItem;
