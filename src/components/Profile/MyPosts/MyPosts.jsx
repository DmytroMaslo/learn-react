import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let PostData = [
        { id: 1, post: 'Hi! first message', likes: 3 },
        { id: 2, post: 'Using props!', likes: 5 },
        { id: 3, post: 'How are you?', likes: 7 },
        { id: 4, post: 'Spam message', likes: 4 },
        { id: 5, post: 'Just another post', likes: 9 },
        { id: 6, post: 'More post is better', likes: 13 },
    ]
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