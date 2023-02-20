import React from "react";
import contentHeader from './../img/contentHeader.png';
const Profile = ()=>{
    return <div class='content'>
        <div>
            <img src={contentHeader} />
            <div>ava+description</div>
            <div>
                My post
                <div>New Post</div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    </div>
}
export default Profile;