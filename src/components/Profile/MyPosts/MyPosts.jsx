import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
        debugger;
    }
   
    return (
        <div>
            <div className={style.addPostStyle}>
                <textarea ref={newPostElement}>Type text here</textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={style.posts}>New Post</div>
            
            {props.postData.map(data =>
                <Post message={data.post} id={data.id} likes={data.likes} />
            )}
        </div>
    )
}
export default MyPosts;