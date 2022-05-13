import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Grid, Box, Typography, Button } from '@mui/material';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Grid item xs={4} sm={4} md={4} lg={3}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '16px',
          borderRadius: '5px',
        }}
      >
        <Box sx={{ marginLeft: '16px', width: '100%' }}>
          <Typography variant="subtitle1" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {number}
          </Typography>

          <Box sx={{ display: 'flex' }}>
            <Button
              variant="contained"
              color="success"
              size="small"
              sx={{ marginRight: '10px' }}
              onClick={() => {
                navigate(`/edit/${id}`);
                location.state = { id };
              }}
            >
              Edit
            </Button>
            <Button
              type="button"
              variant="contained"
              size="small"
              color="error"
              onClick={() => {
                deleteContact(id);
                isSuccess && toast.success(`Contact ${name} was delete`);
              }}
              disabled={isLoading}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
