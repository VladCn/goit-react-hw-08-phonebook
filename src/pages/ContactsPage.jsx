import {useState} from "react";
import { ContactList } from 'components/ContactList';
import { Outlet, useNavigate } from 'react-router-dom';
import {Box, Button, TextField} from "@mui/material";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

export const ContactsPage = () => {
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  const handleAddContact = () => navigate('/edit')

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box sx={{ padding: { xs: '16px', sm: '24px' }, display: 'flex' }}>
        <Button
          variant="contained"
          color='primary'
          sx={{ display: { xs: 'none', md: 'flex' } }}
          onClick={handleAddContact}
        >
          Add contact
        </Button>
        <Button
          variant="contained"
          size="small"
          aria-label="Add contact"
          sx={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            display: { xs: 'flex', md: 'none' },
          }}
          onClick={handleAddContact}
        >
          <AddIcCallIcon
            sx={{
              color: 'white',
              fontSize: 25,
            }}
          />
        </Button>
        <TextField
          value={filter}
          onChange={e => setFilter(e.target.value.toLowerCase().trim())}
          label="fill name"
          type="search"
          variant="standard"
          size="small"
          sx={{ marginLeft: '20px' }}
        />
      </Box>
      <ContactList filter={filter} />
      <Outlet />
    </Box>
  );
};
