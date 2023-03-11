import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../img/logo.png';
import style from './Header.module.css';
import { BiLogOut } from "react-icons/bi";

const Header = (props) => {
    return <header className={style.header}>
        <img src={logo} />
        <NavLink to='/profile'><span>Social NetWork</span></NavLink>
        
        <div className={style.loginBlock}>
            
            {props.isAuth===true 
                ?<div>{props.login } <span className={style.logout} onClick={props.logout}><BiLogOut/></span></div>  
                :<NavLink to='/login'>Login</NavLink>}
            
        </div>
    </header>
}

export default Header