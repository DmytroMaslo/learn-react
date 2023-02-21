import React from "react";
import classes from './Navigation.module.css';
const Navigation = () => {
    return <nav className='sidebar'>
        <div className={classes.item}>
            <a href='/profile'>Profile</a>
        </div>
        <div className={classes.item}>
            <a href='/dialogs'>Messages</a>
        </div>
        <div className={classes.item}>
            <a href='/news'>News</a>
        </div>
        <div className={classes.item}>
            <a href='/news'>Music</a>
        </div>
        <div className={classes.item}>
            <a href='/news'>Settings</a>
        </div>
    </nav>
}
export default Navigation;