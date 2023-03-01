import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css';
const Navigation = () => {
    return <nav className={classes.sidebar}>
        <div className={classes.item}>
            <NavLink to='/profile' className={({ isActive }) => isActive ? classes.activeLink : undefined }>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs' className={({ isActive }) => isActive ? classes.activeLink : undefined }>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/news' className={({ isActive }) => isActive ? classes.activeLink : undefined }>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/music' className={({ isActive }) => isActive ? classes.activeLink : undefined }>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings' className={({ isActive }) => isActive ? classes.activeLink : undefined }>Settings</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/users' className={({ isActive }) => isActive ? classes.activeLink : undefined }>Users</NavLink>
        </div>
    </nav>

}
export default Navigation;