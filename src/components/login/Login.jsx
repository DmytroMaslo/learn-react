import React from 'react';
import { Form, Field } from 'react-final-form'

const Login = (props) => {
    return (
        <div>
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
                console.log(values)
                props.login(values)
            }}
            validate={values => {
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <label>Login</label>
                    <div>

                        <Field
                            name="email"
                            component="input"
                            type="text"
                            placeholder="Login"
                        />
                    </div>
                    <label>Password</label>
                    <div>
                        <Field
                            name="password"
                            component="input"
                            type="text"
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <label>Remember me</label>
                        <Field name="rememberMe" component="input" type="checkbox" />
                    </div>

                    <div className="buttons">
                        <button type="submit" disabled={submitting || pristine}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            )}
        />
    )
}



export default Login