import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={style.addPost}>
                <textarea>Type text here</textarea>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={style.posts}>New Post</div>
            <Post message='Hi! first message' />
            <Post message='Using props!' />
        </div>
    )

}
export default MyPosts;