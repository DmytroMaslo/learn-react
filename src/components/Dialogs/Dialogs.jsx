import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Dialogs.module.css';

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
            </div>
        </div>

    )
}

export default Dialogs;