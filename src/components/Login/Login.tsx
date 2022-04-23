import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginTC } from "../../redux/auth-reducer";
import s from './Login.module.css'
import { AppRootStateType } from "../../redux/redux-store";
import { Navigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required")
});

export const LoginForm = () => {

  let dispatch = useDispatch()
  const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)


  let handleSubmit = (values: any) => {
    dispatch(loginTC(values.email, values.password, values.rememberMe));
  };


  if (isAuth) {
    return <Navigate to={"/"} />
  }

  return (
    <>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form className={s.loginBlock} >
              <label>
                Email: <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </label>
              <label>
                Password:
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </label>
              <button type="submit" color={'primary'} disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  )
}



function Login() {
  return (
    <div className={s.loginForm}>
      <LoginForm />
    </div>
  )
}

export default Login