import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

    }

    return (
        <div>
            <div className={style.addPostStyle}>
                <textarea
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}
                >Type text here</textarea>
                <div>
                    <button onClick={props.onAddPost}>Add post</button>
                </div>

            </div>
            <div className={style.posts}>New Post</div>

            {props.posts.map(data =>
                <Post message={data.post} id={data.id} likes={data.likes} />
            )}
        </div>
    )
}
export default MyPosts;