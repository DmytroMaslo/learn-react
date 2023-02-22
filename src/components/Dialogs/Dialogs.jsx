import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={'/dialogs/'+props.id} className={styles.dialogLink}> {props.name} </NavLink>
        </div>
    )
}
const Message = (props)=>{
    return(
        <div className={styles.message}>{props.message}</div>
    )
}
const Dialogs = () => {
    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogs}>
                <DialogItem name='Alex' id='1' />
                <DialogItem name='Nick' id='2' />
                <DialogItem name='Sam' id='3' />
                <DialogItem name='Daniel' id='4' />
                <DialogItem name='Viktor' id='5' />
                <DialogItem name='Dean' id='6' />
            </div>
            <div className={styles.messages}>
                <Message message='Hi!' />
                <Message message='How are you?' />
                <Message message='Okey' />
                <Message message='Yo!' />
                <Message message='Yo?' />
            </div>
        </div>

    )
}

export default Dialogs;