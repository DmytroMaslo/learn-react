import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Dialogs.module.css';
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogs-reducer";

const DialogItem = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={'/dialogs/' + props.id} className={styles.dialogLink}> {props.name} </NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}
const SendMessage = (props) => {
    let newMessageText = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChange = () => {
        let textMessage = newMessageText.current.value;
        props.dispatch(updateNewMessageActionCreator(textMessage))
    }
    return (
        <div>
            <div><textarea 
                    ref={newMessageText}
                    value={props.newMessage}
                    onChange={onMessageChange}>Type your message here</textarea></div>
            <div>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}
const Dialogs = (props) => {

    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogs}>
                {props.dialogs.map((dialog) => (
                    <DialogItem name={dialog.name} id={dialog.id} />
                ))}
            </div>
            <div className={styles.messages}>
                {props.messages.map((data) => (
                    <Message message={data.message} />
                ))}
                <div className={styles.sendMessage}>
                    <SendMessage dispatch ={props.dispatch}/>
                </div>
            </div>

        </div>
    )
    
}

export default Dialogs;