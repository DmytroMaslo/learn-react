import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let postChange = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text))

    }

    return (
        <MyPosts updateNewPostText={postChange} onAddPost={addPost} posts = {state.profilePage.posts}/>
    )
}
export default MyPostsContainer;