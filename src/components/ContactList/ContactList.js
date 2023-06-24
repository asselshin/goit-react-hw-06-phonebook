import { useSelector } from 'react-redux';
import { getContactsState, getFilterState } from 'redux/selectors';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = () => {
  const contacts = useSelector(getContactsState).contacts;
  console.log(contacts);
  const normalizedFilter = useSelector(getFilterState).toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};

export default ContactList;
