import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const Contact = ({ contact: { id, name, number }, deletingContact }) => {
  return (
    <>
      <h2>
        <FaUser />
        {name}
      </h2>
      <p>
        <FaPhone />
        {number}
      </p>
      <button type="button" onClick={() => deletingContact(id)}>
        <MdDeleteForever />
      </button>
    </>
  );
};
export default Contact;
