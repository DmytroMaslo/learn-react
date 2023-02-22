import React from "react";
import logo from '../../img/logo.png';
import style from './Header.module.css';

const Header = () => {
    return <header class={style.header}>
        <img src={logo} />
        <span>Social NetWork</span>
    </header>
}

export default Header