import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';

export default function ContactCount() {
  const contactCount = useSelector(selectContacts).length;

  return <p>Contacts: ({contactCount})</p>;
}
