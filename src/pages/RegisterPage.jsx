import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Button, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validate={values => {
        const errors = {};

        if (!values.name) {
          errors.name = 'Required';
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        } else if (values.password.length < 7) {
          errors.password = 'Input more then 7 symbol';
        }
        return errors;
      }}
      onSubmit={({ name, email, password }, { setSubmitting }) => {
        setSubmitting(false);
        dispatch(authOperations.register({ name, email, password }));
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Box
          sx={{
            padding: { xs: '24px' },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Form>
            <Box sx={{ marginTop: '24px' }}>
              <Field
                component={TextField}
                name="name"
                type="text"
                label="Name"
                size="small"
              />
            </Box>
            <Box sx={{ marginTop: '24px' }}>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
                size="small"
              />
            </Box>
            <Box sx={{ marginTop: '24px' }}>
              <Field
                component={TextField}
                type="password"
                label="Password"
                name="password"
                size="small"
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                sx={{ marginRight: '16px' }}
              >
                Submit
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  navigate('/');
                }}
              >
                Cancel
              </Button>
            </Box>
          </Form>
        </Box>
      )}
    </Formik>
  );
};
