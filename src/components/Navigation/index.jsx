import { useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  IconButton,
  Typography,
  Menu,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { icon, menu } from './styles';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          sx={icon}
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElNav}
          keepMounted
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={menu}
        >
          <MenuItem key="HomePage">
            <Button variant="text" onClick={() => navigate('/')}>
              Home
            </Button>
          </MenuItem>
          {isLoggedIn && (
            <MenuItem key="Contacts" onClick={handleCloseNavMenu}>
              <Button
                variant="text"
                onClick={() => {
                  navigate('contacts');
                }}
              >
                Contacts
              </Button>
            </MenuItem>
          )}
        </Menu>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Button
          key="HomePage"
          onClick={() => {
            handleCloseNavMenu();
            navigate('/');
          }}
          sx={{ my: 2, color: 'white', display: 'block', margin: '0' }}
        >
          Home
        </Button>
        {isLoggedIn && (
          <Button
            key="Contacts"
            onClick={() => {
              handleCloseNavMenu();
              navigate('/contacts');
            }}
            sx={{ my: 2, color: 'white', display: 'block', margin: '0' }}
          >
            Contacts
          </Button>
        )}
      </Box>
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mr: 2,
          ml: 1,
          flexGrow: 1,
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        PHONEBOOK
      </Typography>
    </>
  );
};
