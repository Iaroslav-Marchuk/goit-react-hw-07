import { FaUser, FaPhone } from 'react-icons/fa';

import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contactsOps';

import css from './Contact.module.css';

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.card}>
      <div className={css.info}>
        <p className={css.item}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.item}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
