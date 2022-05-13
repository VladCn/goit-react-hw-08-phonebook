import Box from '@mui/material/Box';
import { Skeleton as MaterialSkeleton } from '@mui/material';

export const Skeleton = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <MaterialSkeleton />
      <MaterialSkeleton animation="wave" />
      <MaterialSkeleton animation={false} />
    </Box>
  );
};
