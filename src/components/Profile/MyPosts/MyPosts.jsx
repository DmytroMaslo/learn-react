import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

    }

    return (
        <div>
            <div className={s.addPosts}>
                <textarea
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}
                >Type text here</textarea>
                <div>
                    <button onClick={props.onAddPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>New Post</div>

            {props.posts.slice(0).reverse().map(data =>
                <Post message={data.post} id={data.id} key={data.id} likes={data.likes} />
            )}
        </div>
    )
}
export default MyPosts;