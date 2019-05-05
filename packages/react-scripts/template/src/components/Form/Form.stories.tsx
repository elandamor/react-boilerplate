import React from 'react';
import { storiesOf } from '@storybook/react';
import { Field, Formik } from 'formik';

import Form from './index';
import Button from '../Button';

const initialValues = {
  name: '',
  bio: ''
};

storiesOf('Form', module)
.add('default', () => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values, { setSubmitting }) => {
      console.log({ values });

      setTimeout(() => setSubmitting(false), 3000);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field type="text" label="Name" name="name" placeholder="Name"/>
        <Field component="textarea" name="bio" placeholder="Enter your biography" />
        <Button type="submit" text="Submit" disabled={isSubmitting} />
      </Form>
    )}
  </Formik>
))

