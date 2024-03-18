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
      <div className={css.contact}>
        <FaUser className={css.contactIcon} />
        <h2 className={css.name}>{name}</h2>
      </div>
      <div className={css.contact}>
        <FaPhone className={css.contactIcon} />
        <p className={css.number}>{number}</p>
      </div>
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
