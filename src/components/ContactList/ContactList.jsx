import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactslist}>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
