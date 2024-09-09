import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

import Contact from '../Contact/Contact';
import EmptyContactsList from '../EmptyContactsList/EmptyContactsList';

import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  const reversedContacts = contacts.slice().reverse();

  const filteredContacts = filters
    ? reversedContacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filters.name.toLowerCase()) ||
          String(contact.number).includes(filters.name)
      )
    : reversedContacts;

  return (
    <ul className={css.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))
      ) : (
        <EmptyContactsList />
      )}
    </ul>
  );
}
