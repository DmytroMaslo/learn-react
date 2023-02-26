import React from "react";
import styles from './SendMessage.module.css';
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/dialogs-reducer";


const SendMessage = (props) => {

    let newMessageText = React.createRef();

    let onMessageChange = () => {
        let textMessage = newMessageText.current.value;
        props.onMessageChange(textMessage)
    }
    return (
        <div className={styles.sendMessage}>
            <div>
                <textarea
                    ref={newMessageText}
                    value={props.newMessage}
                    onChange={onMessageChange}>Type your message here
                </textarea>
            </div>
            <div>
                <button onClick={props.onAddMessage}>Send</button>
            </div>
        </div>
    )
}

export default SendMessage;