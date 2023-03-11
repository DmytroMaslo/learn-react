import React from 'react';
import { Form, Field } from 'react-final-form'
import { Navigate } from 'react-router-dom';
import styles from './Login.module.css'

const Login = (props) => {

    if (props.isAuth === true) {
        return <Navigate to='/profile' />
    }
    return (
        <div>
            <span className={styles.error}>{props.authError !== null ? props.authError : ''}</span>
            <LoginForm login={props.login} />
            <div>
                <strong>Email:</strong> free@samuraijs.com   <strong>Password:</strong>free
            </div>
        </div>
    )
}
const LoginForm = (props) => {

    return (
        <Form
            initialValues={{ rememberMe: true }}
            onSubmit={values => {
                props.login(values)
            }}
            validate={values => {
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <label>Login</label>
                    <div>

                        <Field name="email" component="input" type="text" placeholder="Email"
                            validate={value => value ? undefined : 'Required'}>
                            {({ input, meta, placeholder }) => (
                                <div className={styles.error}>
                                    <input {...input} placeholder={placeholder} className={meta.error && meta.touched ? styles.inputError : ''} />
                                    {meta.error && meta.touched ? meta.error : ''}
                                </div>
                            )}
                        </Field>
                    </div>
                    <label>Password</label>
                    <div>
                        <Field name="password" component="input" type="text" placeholder="Password"
                            validate={value => value ? undefined : 'Required'}>
                            {({ input, meta, placeholder }) => (
                                <div className={styles.error}>
                                    <input {...input} placeholder={placeholder} className={meta.error && meta.touched ? styles.inputError : ''} />
                                    {meta.error && meta.touched ? meta.error : ''}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <label>Remember me</label>
                        <Field name="rememberMe" component="input" type="checkbox" />
                    </div>

                    <div className="buttons">
                        <button type="submit" disabled={submitting || pristine}>
                            Submit
                        </button>
                    </div>
                </form>
            )}
        />
    )
}



export default Login