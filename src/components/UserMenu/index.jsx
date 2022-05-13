import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import {
  Box,
  Tooltip,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { stringAvatar } from 'utils';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography sx={{ mr: '10px', display: { xs: 'none', md: 'flex' } }}>
        Welcome, {name}
      </Typography>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar {...stringAvatar(`${name}`)} alt={`${name}`} />
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
        <MenuItem key="LogOut" onClick={handleCloseUserMenu}>
          <Typography
            textAlign="center"
            onClick={() => dispatch(authOperations.logOut())}
          >
            LogOut
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
