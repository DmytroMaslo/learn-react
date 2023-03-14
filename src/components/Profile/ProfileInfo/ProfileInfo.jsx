import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from './ProfileInfo.module.css'
import defaultAvatar from './../../../img/default-user.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile,status,updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={styles.userInfo}>
                <img className={styles.userAvatar} src={profile.photos.small != null
                    ? profile.photos.small
                    : defaultAvatar} />
                <h4>{profile.fullName !== undefined
                    ? profile.fullName
                    : ''}</h4>
                <span>{profile.userId !== undefined
                    ? profile.userId
                    : ''}</span>
                <span><h4>Status </h4></span>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>

        </div>
    )
}
export default ProfileInfo;