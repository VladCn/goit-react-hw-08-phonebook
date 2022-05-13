import { Box, Typography } from '@mui/material';

export const NotAuthPage = () => {
  return (
    <Box
      sx={{
        padding: { xs: '16px', sm: '24px' },
      }}
    >
      <Typography
        textAlign="center"
        sx={{ paddingTop: '20px', fontSize: '24px', color: '#1976d2' }}
      >
        Sorry, we didn`t recognize you.
      </Typography>
      <Typography
        textAlign="center"
        sx={{ fontSize: '24px', color: '#1976d2' }}
      >
        Try to login
      </Typography>
    </Box>
  );
};
