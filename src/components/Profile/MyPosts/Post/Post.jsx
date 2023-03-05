import React from "react";
import style from './Post.module.css'
import defaultAvatar from './../../../../img/default-user.jpg'


const Post = (props) => {
    return <div className={style.item}>
        <img src={defaultAvatar} />
        {props.message}
        <div className={style.like}>Likes:{props.likes}</div>
    </div>


}
export default Post;