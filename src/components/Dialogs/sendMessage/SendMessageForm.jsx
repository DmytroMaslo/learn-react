import React from "react";
import styles from './SendMessage.module.css';
import { Field, Form } from "react-final-form";


const SendMessage = (props) => {

    let newMessageText = React.createRef();

    let onMessageChange = () => {
        let textMessage = newMessageText.current.value;
        props.onMessageChange(textMessage)
    }
    return (
        <div className={styles.sendMessage}>

        </div>
    )
}
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