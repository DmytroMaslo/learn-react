import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let PostData = props.postData
    return (
        <div>
            <div className={style.addPost}>
                <textarea>Type text here</textarea>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={style.posts}>New Post</div>
            {PostData.map(data =>
                <Post message={data.post} id={data.id} likes={data.likes} />
            )}
        </div>
    )

}
export default MyPosts;