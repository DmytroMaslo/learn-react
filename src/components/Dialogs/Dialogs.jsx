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
const Dialogs = () => {
    let DialogData = [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Nick' },
        { id: 3, name: 'Sam' },
        { id: 4, name: 'Daniel' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Dean' },
    ];
    let MessageData = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Okey' },
        { id: 4, message: 'Yo!' },
        { id: 5, message: 'Yo@' },
        { id: 6, message: 'Yo?' },
        { id: 7, message: '%#&$#$?' },
    ]
    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogs}>
                {DialogData.map((dialog) => (
                    <DialogItem name={dialog.name} id={dialog.id} />
                ))}
            </div>
            <div className={styles.messages}>
                {MessageData.map((data) => (
                    <Message message={data.message} />
                ))}
            </div>
        </div>

    )
}

export default Dialogs;