import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostActionCreator(text))
        },
        onAddPost: (postText) => {
            dispatch(addPostActionCreator(postText))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);

/**
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
                    return (
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
 */