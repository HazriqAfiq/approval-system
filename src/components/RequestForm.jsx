
import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const RequestForm = ({ setRequests }) => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !details) return;
    const newRequest = {
      id: Date.now(),
      name,
      details,
      status: 'pending',
    };
    setRequests((prevRequests) => [...prevRequests, newRequest]);
    setName('');
    setDetails('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        label="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Request Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        fullWidth
        required
        multiline
        rows={4}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained">
        Submit Request
      </Button>
    </Box>
  );
};

export default RequestForm;
