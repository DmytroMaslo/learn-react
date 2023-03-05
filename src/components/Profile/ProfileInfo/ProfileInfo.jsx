import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import contentHeader from './../../../img/contentHeader.png';
import styles from './ProfileInfo.module.css'
import defaultAvatar from './../../../img/default-user.jpg'
const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
            <div>
                <div className={styles.imageContainer}>
                    <img className={styles.profileHeadImg} src={contentHeader} />
                </div>
                <div className={styles.userInfo}>
                    <img className={styles.userAvatar} src={props.profile.photos.small!=null 
                        ? props.profile.photos.small
                        : defaultAvatar}/>
                    <h4>{props.profile != undefined 
                    ?props.profile.fullName
                    :''  }</h4>
                    <span>{props.profile != undefined 
                    ?props.profile.userId
                    :''  }</span>
                    <span><h4>About me: </h4></span>
                    <span>{props.profile != undefined 
                    ?props.profile.aboutMe
                    :''  }</span>
                </div>
            </div>
    )
}
export default ProfileInfo;