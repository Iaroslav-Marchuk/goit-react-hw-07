import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

import css from './ContactForm.module.css';

import * as Yup from 'yup';

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Min 3 chars')
      .max(30, 'Max 50 chars')
      .required('This is a required field'),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        'Phone number must be in format 123-45-67'
      )
      .required('Phone number is required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          className={css.input}
          type="text"
          name="name"
          id={nameFieldId}
        ></Field>
        <ErrorMessage className={css.error} name="name" component="span" />

        <label className={css.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={css.input}
          type="text"
          name="number"
          id={numberFieldId}
        ></Field>
        <ErrorMessage className={css.error} name="number" component="span" />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
