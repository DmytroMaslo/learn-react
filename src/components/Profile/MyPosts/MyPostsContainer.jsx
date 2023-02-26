import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState()
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let postChange = (text) => {
                        store.dispatch(updateNewPostActionCreator(text))
                    }
                    return(
                        <MyPosts 
                            updateNewPostText={postChange} 
                            onAddPost={addPost} 
                            posts={state.profilePage.posts} />
                    )
                
                }
            }
            
        </StoreContext.Consumer>

    )
}
export default MyPostsContainer;