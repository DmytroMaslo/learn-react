import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../img/logo.png';
import style from './Header.module.css';

const Header = (props) => {
    return <header className={style.header}>
        <img src={logo} />
        <NavLink to='/profile'><span>Social NetWork</span></NavLink>
        
        <div className={style.loginBlock}>
            
            {props.isAuth===true 
                ?<div>{props.login } <button onClick={props.logout}>Logout</button></div>  
                :<NavLink to='/login'>Login</NavLink>}
            
        </div>
    </header>
}

export default Header