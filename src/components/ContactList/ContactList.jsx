import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contactList, deletingContact }) => {
  return (
    <ul className={css.list}>
      {contactList.map(contact => {
        return (
          <li key={contact.id}>
            <Contact
              contact={contact}
              deletingContact={deletingContact}
            ></Contact>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
