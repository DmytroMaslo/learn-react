import React from "react";
import contentHeader from './../../img/contentHeader.png';
import MyPosts from "./MyPosts/MyPosts";
const Profile = ()=>{
    return <div class='content'>
        <div>
            <img src={contentHeader} />
            <div>ava+description</div>
            <MyPosts />
        </div>
    </div>
}
export default Profile;