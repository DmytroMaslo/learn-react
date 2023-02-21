import React from "react"
import { NavLink } from "react-router-dom";
import classes from './Dialogs.module.css'
const Dialogs = () => {
    return (
        <div className={classes.dialogsWrapper}>
            <div className={classes.dialogs}>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/1'>Alex</NavLink>
                </div>
                <div className={classes.dialog + ' ' + classes.activeDialog}>
                    <NavLink to='/dialogs/2'>Nick</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Sam</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Daniel</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi!</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>It's ok</div>
            </div>
        </div>

    )
}

export default Dialogs;