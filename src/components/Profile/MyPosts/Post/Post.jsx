import React from "react";
import style from './Post.module.css'
import avaLogo from '../../../../img/avaLogo.jpg'

const Post = (props) => {
    return <div className={style.item}>
        <img src={avaLogo} />
        {props.message}
    </div>


}
export default Post;