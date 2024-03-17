import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const ContactForm = ({ addingContact }) => {
  const formId = {
    name: useId(),
    number: useId(),
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    values.id = nanoid();
    addingContact(values);
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={formId.name}>Name</label>
        <Field className={css.input} type="text" name="name" id={formId.name} />
        <ErrorMessage className={css.error} name="name" as="span" />
        <label htmlFor={formId.number}>Number</label>
        <Field
          className={css.input}
          type="tel"
          name="number"
          id={formId.number}
        />
        <ErrorMessage className={css.error} name="number" as="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
