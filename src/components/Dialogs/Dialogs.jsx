import React from "react"
import classes from './Dialogs.module.css'
const Dialogs = () => {
    return (
        <div className={classes.dialogsWrapper}>
            <div className={classes.dialogs}>
                <div className={classes.dialog}>
                    Alex
                </div>
                <div className={classes.dialog + ' ' + classes.activeDialog}>
                    Nick
                </div>
                <div className={classes.dialog}>
                    Sam
                </div>
                <div className={classes.dialog}>
                    Daniel
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