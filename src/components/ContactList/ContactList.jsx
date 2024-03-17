import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contactList, deletingContact, setter }) => {
  return (
    <ul className={css.list}>
      {contactList.map(contact => {
        return (
          <li key={contact.id}>
            <Contact
              contact={contact}
              deletingContact={deletingContact}
              setter={setter}
            ></Contact>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
