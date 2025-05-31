import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from '../../redux/contactsOps';

import {
  selectContacts,
  selectLoading,
  selectError,
} from '../../redux/contactsSlice';

import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader loadingState={loading} />}
      {error && <ErrorMessage message={error} />}
      {!error && contacts.length > 0 && <ContactList />}

      {!loading && !error && contacts.length === 0 && (
        <p className={css.noResults}>The phonebook is empty!</p>
      )}
    </div>
  );
}
