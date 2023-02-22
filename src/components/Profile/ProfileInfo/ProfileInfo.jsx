import React from "react";
import contentHeader from './../../../img/contentHeader.png';
import styles from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
            <div>
                <div className={styles.imageContainer}>
                    <img className={styles.profileHeadImg} src={contentHeader} />
                </div>
                <div>Some description must be here</div>
            </div>
    )
}
export default ProfileInfo;