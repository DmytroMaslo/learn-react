import React from "react";
import styles from './Preloader.module.css';
import spiner from './../../../img/spiner.gif'
let Preloader = ()=>{
    return(<div ><img className={styles.spinner} src={spiner} /></div>)
}

export default Preloader;