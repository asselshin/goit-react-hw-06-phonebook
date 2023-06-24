import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {

  return (
    <div className="container">
      <h1>Phonebook </h1>
      <Form/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  );
}
