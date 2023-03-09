import React from "react";
import { Field, Form } from "react-final-form";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const NewPostForm = (props) => {

    return (
        <Form
            onSubmit={values => {
                console.log(values)
                props.onAddPost(values.newPostText)
            }}
            validate={values => {
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            name="newPostText"
                            component="textarea"
                            type="text"
                            placeholder="Type your new post"
                            validate={value=>value?undefined:'Required'}
                        />
                    </div>
                    <div className="buttons">
                        <button type="submit" disabled={submitting || pristine}>
                            Add post
                        </button>
                    </div>
                </form>
            )}
        />
    )
}
const MyPosts = (props) => {
    return (
        <div>
            <NewPostForm onAddPost={props.onAddPost}/>
            <div className={s.posts}>New Post</div>

            {props.posts.slice(0).reverse().map(data =>
                <Post message={data.post} id={data.id} key={data.id} likes={data.likes} />
            )}
        </div>
    )
}
export default MyPosts;