import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { FaArrowRight } from 'react-icons/fa';
import clsx from 'clsx';

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
      .min(3, 'Too Short! Length must be between 3 and 50 characters')
      .max(50, 'Too Long! Length must be between 3 and 50 characters')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short! Length must be between 3 and 50 characters')
      .max(50, 'Too Long! Length must be between 3 and 50 characters')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <>
            <label htmlFor={formId.name}>Name</label>
            <Field
              className={clsx(css.input, {
                [css.invalid]: errors.name && touched.name,
              })}
              type="text"
              name="name"
              id={formId.name}
            />
            <ErrorMessage name="name" className={css.error} component="span" />
          </>

          <>
            <label htmlFor={formId.number}>Number</label>
            <Field
              className={clsx(css.input, {
                [css.invalid]: errors.number && touched.number,
              })}
              type="tel"
              name="number"
              id={formId.number}
            />
            <ErrorMessage
              name="number"
              className={css.error}
              component="span"
            />
          </>

          <button className={css.addButton} type="submit">
            <span>Add contact</span> <FaArrowRight className={css.icon} />
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default ContactForm;
