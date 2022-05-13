import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Typography,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { stringAvatar } from 'utils';

export const AuthNav = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
        <Button
          onClick={() => {
            navigate('/login');
          }}
          sx={{ my: 2, color: 'white', display: 'block', margin: '0' }}
        >
          Login
        </Button>
        <Button
          onClick={() => {
            navigate('/register');
          }}
          sx={{ my: 2, color: 'white', display: 'block', margin: '0' }}
        >
          Register
        </Button>
      </Box>
      <Box
        sx={{
          flexGrow: 0,
          display: { xs: 'flex', md: 'none' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Unregistered user" {...stringAvatar('?????')} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem key="Login" onClick={handleCloseUserMenu}>
            <Typography
              textAlign="center"
              onClick={() => {
                navigate('/login');
              }}
            >
              LogIn
            </Typography>
          </MenuItem>
          <MenuItem key="Register" onClick={handleCloseUserMenu}>
            <Typography
              textAlign="center"
              onClick={() => {
                navigate('/register');
              }}
            >
              Register
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};
