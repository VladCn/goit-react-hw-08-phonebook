import { useNavigate } from 'react-router-dom';
import { useEditHook } from 'hooks/hooks';
import {
  useCreateContactMutation,
  useEditContactMutation,
} from 'redux/contacts/contactsApi';
import { Button, Box, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import toast from 'react-hot-toast';

export const EditPage = () => {
  const filter = '';
  let navigate = useNavigate();
  const [createContact] = useCreateContactMutation();
  const [editContact] = useEditContactMutation();
  const { fields, contacts, params } = useEditHook();
  const { title, id, name, number } = fields;

  return (
    <>
      <Typography
        textAlign="center"
        sx={{ paddingTop: '16px', fontSize: '20px', color: '#1976d2' }}
      >{`${title}`}</Typography>
      <Formik
        initialValues={{
          name,
          number,
        }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          } else if (
            contacts.filter(
              ({ name }) =>
                name.toLowerCase().trim() === values.name.toLowerCase().trim()
            ).length !== 0 &&
            !params.id
          ) {
            errors.name = 'This name is already in the list';
          }
          if (!values.number) {
            errors.number = 'Required';
          } else if (
            !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i.test(
              values.number
            )
          ) {
            errors.number = 'Invalid phone number';
          }
          return errors;
        }}
        onSubmit={values => {
          if (!id) {
            createContact({ ...values });
            toast.success(`Contact ${values.name} was create.`);
          } else {
            editContact({ id, ...values });
            toast.success(`Contact ${values.name} was edit.`);
          }
          navigate(-1);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Box
            sx={{
              padding: { xs: '16px', sm: '16px 24px' },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Form>
              <Box sx={{ height: '75px', marginTop: '15px' }}>
                <Field
                  component={TextField}
                  name="name"
                  type="name"
                  label="Name"
                  size="small"
                  placeholder={`${name}`}
                />
              </Box>
              <Box sx={{ height: '75px' }}>
                <Field
                  component={TextField}
                  type="tel"
                  label="Phone number"
                  name="number"
                  size="small"
                  placeholder={`${number}`}
                />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  color="success"
                  disabled={isSubmitting}
                  onClick={submitForm}
                  sx={{ marginRight: '16px' }}
                >
                  Submit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() =>
                    filter !== '' && !filter
                      ? navigate(-1)
                      : navigate('/contacts')
                  }
                >
                  Cancel
                </Button>
              </Box>
            </Form>
          </Box>
        )}
      </Formik>
    </>
  );
};
