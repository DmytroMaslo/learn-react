import React from "react";
import contentHeader from './../../img/contentHeader.png';
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css'
const Profile = ()=>{
    return <div className='content'>
        <div>
            <img className={classes.profileHeadImg} src={contentHeader} />
            <div>ava+description</div>
            <MyPosts />
        </div>
    </div>
}
export default Profile;