import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout, PrivateRoute, PublicRoute, Skeleton } from 'components';
import { HomePage, LoginPage, ContactsPage, EditPage, RegisterPage } from 'pages'
import { authOperations, authSelectors } from 'redux/auth';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {isFetchingCurrentUser ? (
        <Skeleton />
      ) : (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              path="/"
              element={<HomePage/>}
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/" component={<ContactsPage />} />
              }
            />
            <Route
              path="edit"
              element={<PrivateRoute redirectTo="/" component={<EditPage />} />}
            />
            <Route
              path="edit/:id"
              element={<PrivateRoute redirectTo="/" component={<EditPage />} />}
            />
            <Route
              path="register"
              element={<PublicRoute component={<RegisterPage />} restricted />}
            />
            <Route
              path="login"
              element={
                <PublicRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                  restricted
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
