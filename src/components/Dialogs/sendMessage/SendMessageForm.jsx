import React from "react";
import styles from './SendMessage.module.css';
import { Field, Form } from "react-final-form";


const SendMessageForm = (props) => {
    return (
        <Form className={styles.sendMessage}
            onSubmit={values => {
                props.onAddMessage(values.newMessageBody)
            }}
            validate={values => {
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div className={styles.sendMessage} >
                        <Field
                            name="newMessageBody"
                            component="textarea"
                            type="text"
                            placeholder="Type your message"
                        />
                    </div>
                    <div className={styles.sendMessage}>
                        <button type="submit" disabled={submitting || pristine}>
                            Submit
                        </button>
                    </div>
                </form>
            )}
        />

    )
}

export default SendMessageForm;