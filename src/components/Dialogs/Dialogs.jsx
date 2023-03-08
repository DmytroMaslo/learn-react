import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./dialog/DialogItem";
import Message from "./message/Message";
import SendMessageForm from "./sendMessage/SendMessageForm";
import { Navigate } from "react-router-dom";
const Dialogs = (props) => {
    if (!props.isAuth){
        return <Navigate to='/login'/>
    }
    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogs}>
                <div>{props.isAuth}</div>
                {props.dialogs.map((dialog) => (
                    <DialogItem name={dialog.name} id={dialog.id} key = {dialog.id} />
                ))}
            </div>
            <div className={styles.messages}>
                {props.messages.map((data) => (
                    <Message message={data.message} key = {data.id}/>
                ))}
                <div className={styles.sendMessage}>
                    <SendMessageForm onAddMessage ={props.onAddMessage} onMessageChange ={props.onMessageChange} newMessage={props.newMessage}/>
                </div>
            </div>

        </div>
    )
    
}

export default Dialogs;