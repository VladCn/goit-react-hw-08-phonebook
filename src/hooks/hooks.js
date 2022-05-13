import { useEffect, useState } from 'react';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
import { useParams } from 'react-router-dom';

export const useContactListHook = filter => {
  const [list, setList] = useState(null);
  const { data: contacts, isFetching, isLoading } = useFetchContactsQuery();
  useEffect(() => {
    filter !== ''
      ? setList(
          contacts.filter(({ name }) => name.toLowerCase().includes(filter))
        )
      : setList(contacts);
  }, [contacts, filter]);

  return { list, isFetching, isLoading };
};

export const useEditHook = () => {
  let params = useParams();
  const { data: contacts } = useFetchContactsQuery();
  const fields = !params?.id
    ? {
        title: `Add Contact : `,
        name: 'Kent Dodds',
        number: '+38(012)345-67-89',
      }
    : {
        title: `Edit contact: `,
        ...contacts.find(({ id }) => id === params.id),
      };
  return { fields, contacts, params };
};
