import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, useField } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { FaArrowRight } from 'react-icons/fa';
import clsx from 'clsx';

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <input
        className={clsx(css.input, {
          [css.invalid]: meta.touched && meta.error,
        })}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <span className={css.error}>{meta.error}</span>
      ) : null}
    </>
  );
};

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
      <Form className={css.form}>
        <MyInput label="Name" name="name" type="text" id={formId.name} />
        <MyInput label="Number" name="number" type="tel" id={formId.number} />
        <button className={css.addButton} type="submit">
          <span>Add contact</span> <FaArrowRight className={css.icon} />
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
