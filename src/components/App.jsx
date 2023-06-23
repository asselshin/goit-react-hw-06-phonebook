import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { getFilterState, getContactsState } from 'redux/selectors';


export default function App() {
  const [contacts, setContacts] = useState(
    () => {
      return JSON.parse(window.localStorage.getItem('contacts')) ?? ' ';
    });
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFillteredNames = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const formSubmitHandler = data => {
    console.log(data);
  //   const contact = {
  //     id: nanoid(),
  //     ...data,
  //   };

  //   const repeatedName = contact.name.toLowerCase();

  //   const hasrepeatedName = contacts.find(
  //     contact => contact.name.toLowerCase() === repeatedName.toLowerCase()
  //   );

  //   if (hasrepeatedName) {
  //     alert(`${contact.name} is already in contacts`);
  //     return false;
  //   }

  //   setContacts(prevState => [...prevState, contact]);
  //   return true;
  };

  const filterState = useSelector(getFilterState);
  const contactsState = useSelector(getContactsState);

  return (
    <div className="container">
      <h1>Phonebook </h1>
      <Form contacts={contactsState} />
      <h2>Contacts</h2>
      <Filter value={filterState} onChange={changeFilter} />
      <ContactList/>
    </div>
  );
}
