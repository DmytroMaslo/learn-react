import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        My post
        <div>New Post</div>
        <Post message = 'Hi! first message'/>
        <Post message = 'Using props!'/>

    </div>

}
export default MyPosts;