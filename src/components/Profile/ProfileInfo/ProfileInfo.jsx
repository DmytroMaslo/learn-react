import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from './ProfileInfo.module.css'
import defaultAvatar from './../../../img/default-user.jpg'
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    //console.log(props)

    return (
        <div>
            <div className={styles.userInfo}>
                <img className={styles.userAvatar} src={props.profile.photos.small != null
                    ? props.profile.photos.small
                    : defaultAvatar} />
                <h4>{props.profile.fullName !== undefined
                    ? props.profile.fullName
                    : ''}</h4>
                <span>{props.profile.userId !== undefined
                    ? props.profile.userId
                    : ''}</span>
                <span><h4>About me: </h4></span>
                <ProfileStatus userStatus={props.userStatus} updateStatus={props.updateStatus}/>
                <span><p>Status</p></span>
            </div>

        </div>
    )
}
export default ProfileInfo;