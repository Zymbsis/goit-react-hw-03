import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const Contact = ({
  contact: { id, name, number },
  deletingContact,
  setter,
}) => {
  return (
    <>
      <h2 className={css.contact}>
        <FaUser className={css.contactIcon} />
        {name}
      </h2>
      <p className={css.contact}>
        <FaPhone className={css.contactIcon} />
        {number}
      </p>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          deletingContact(id);
          setter('');
        }}
      >
        <MdDeleteForever className={css.icon} />
      </button>
    </>
  );
};
export default Contact;
