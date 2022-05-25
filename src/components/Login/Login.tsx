import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginTC } from "../../redux/auth-reducer";
import s from './Login.module.css'
import { AppRootStateType } from "../../redux/redux-store";
import { Navigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


const LoginForm = () => {

    const dispatch = useDispatch()

    const [eye, setEye] = useState(true)
    const handleClick = () => {
        if (eye) {
            setEye(false);
        } else {
            setEye(true)
        }
    }

    type ValuesType = {
        email: string
        password: string
        rememberMe: boolean
    }

    const formik = useFormik({
        initialValues: {
            email: 'maksimkander1@gmail.com',
            password: 'MAKS12345',
            rememberMe: false,
        },
        validate: (values) => {
            const errors: Partial<ValuesType> = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Must be 3 characters or more';
            }
            return errors;
        },
        onSubmit: (values: ValuesType) => {
            dispatch(loginTC(values.email, values.password, values.rememberMe));
        },
    })

    return (
        <Grid container justifyContent={'center'}>
            <Grid item justifyContent={'center'}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl >
                        <div className={s.loginBox}>
                            <div className={s.inputField}>
                                <div className={s.social}> Social-Network</div>
                                <div className={s.signIn}> Sign In</div>
                                <FormGroup className={s.formGroup}>
                                 <p> 
                                    <TextField style={{width: '343px'}} className={s.textField} 
										label="Email"
                                        margin="normal"
                                        variant="standard"
                                        {...formik.getFieldProps('email')} />
                                       
                                    {
                                        formik.errors.email &&
                                            formik.touched.email ?
                                            <p className={s.error}>{formik.errors.email}</p>
                                            : null
                                    }
									</p>
                                    <p>
                                    <TextField style={{width: '343px'}} className={s.textField} 
									    type={eye ? `password` : 'text'}
                                        label="Password"
                                        margin="normal"
                                        variant="standard"
                                        {...formik.getFieldProps('password')}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClick}
                                                    >
                                                        {eye ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    /> 
                                   
                                    {
                                        formik.errors.password &&
                                            formik.touched.password ?
                                            <p className={s.error}>{formik.errors.password}</p>
                                            : null
                                    }
									 </p>
                                    <FormControlLabel label={'Remember me'}
                                        control={
                                            <div  >
                                                <Checkbox
                                                    onChange={formik.handleChange}
                                                    value={formik.values.rememberMe}
                                                    name="rememberMe" />
                                            </div>} />
                                    <button className={s.loginButton}>
                                        Login
                                    </button>
                                </FormGroup>
                            </div>
                        </div>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    )
}



export const Login = () => {

    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)

    if (isAuth) {
        return <Navigate to={"/profile"} />
    }

    return (
        <div className={s.loginForm}>
            <LoginForm />
        </div>
    )
}
