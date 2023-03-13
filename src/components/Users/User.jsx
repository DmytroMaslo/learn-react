import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../img/defaultAvatar.png'
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={styles.userBlock} key={user.id}>
            <div className={styles.avaNbutton} >
                <div >
                    <NavLink to={'/profile/' + user.id}><img className={styles.ava} src={user.photos.small != null ? user.photos.small : userPhoto} /></NavLink>
                </div>
                {user.followed
                    ? <button disabled={followingInProgress.some((id) => id === user.id)}
                        className={styles.unfollowbtn}
                        onClick={() => { unfollow(user.id) }}>Unfollow</button>

                    : <button disabled={followingInProgress.some((id) => id === user.id)}
                        className={styles.followbtn} onClick={() => { follow(user.id) }}>Follow</button>}

            </div>
            <div className={styles.nameNdescription}>
                <h3>{user.name}</h3>
                <div>{user.status != null ? user.status : 'Here will be a fine status...'}</div>

            </div>
            <div className={styles.location}>
                <h4>Ukraine</h4>
                <div>Kiyv</div>
            </div>

        </div>)
}



export default User;