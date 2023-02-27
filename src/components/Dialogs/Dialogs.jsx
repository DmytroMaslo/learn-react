import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./dialog/DialogItem";
import Message from "./message/Message";
import SendMessage from "./sendMessage/SendMessage";
const Dialogs = (props) => {

    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogs}>
                {props.dialogs.map((dialog) => (
                    <DialogItem name={dialog.name} id={dialog.id} key = {dialog.id} />
                ))}
            </div>
            <div className={styles.messages}>
                {props.messages.map((data) => (
                    <Message message={data.message} key = {data.id}/>
                ))}
                <div className={styles.sendMessage}>
                    <SendMessage onAddMessage ={props.onAddMessage} onMessageChange ={props.onMessageChange} newMessage={props.newMessage}/>
                </div>
            </div>

        </div>
    )
    
}

export default Dialogs;