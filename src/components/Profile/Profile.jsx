import React from "react";
import { Navigate } from "react-router-dom";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props)=>{
    if (!props.isAuth){
        return <Navigate to='/login'/>
    }
    return <div className={styles.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer profile={props.profile}/>

    </div>
}
export default Profile;