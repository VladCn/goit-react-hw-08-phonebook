import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { AuthNav } from 'components/AuthNav';

import { AppBar, Toolbar, Container, styled } from '@mui/material';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';

const StyledContainer = styled(Container)`
  background-color: #fcba03
`;

export const Appbar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
      <AppBar position="static">
        <StyledContainer maxWidth="lg" >
          <Toolbar disableGutters sx={{ minHeight: '48px' }}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </StyledContainer>
      </AppBar>
  );
};
