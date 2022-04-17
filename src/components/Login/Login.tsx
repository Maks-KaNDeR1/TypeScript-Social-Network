import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
// import FormikControl from './FormikControl'
import s from './Login.module.css'

function LoginForm() {
  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required')
  })

  const onSubmit = (values: any) => {
    console.log('Form data', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {props => {
        return (
          // <div className={s.loginForm} >
            <Form className={s.loginForm}>
              <Field
                control='input'
                // control='chakraInput'
                type='email'
                label='Email'
                name='email'
              />
              <Field
                control='input'
                type='password'
                label='Password'
                name='password'
              />
              <button type='submit' disabled={!props.isValid}>Submit</button>
            </Form>
            // </div>
            )
      }}
          </Formik>
  )
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  )
}

export default Login