import { useContactListHook } from 'hooks/hooks';
import { Grid, Container } from '@mui/material';
import { ContactListItem } from 'components/ContactListItem';

export const ContactList = ({filter}) => {
  const { list, isFetching, isLoading } = useContactListHook(filter);

  return (
    <>
      {isFetching && <h2>Loading ...</h2>}
      {list && !isFetching && !isLoading && (
        <Container sx={{ padding: '16px' }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
            justifyContent="center"
          >
            {list.map(el => (
              <ContactListItem key={el.id} {...el} />
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};
