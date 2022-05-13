import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Appbar } from 'components/Appbar';
import Container from '@mui/material/Container';

export const MainLayout = () => {
  return (
    <Container disableGutters={true}>
      <Appbar />
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
