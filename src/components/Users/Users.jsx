import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../img/defaultAvatar.png'
import { NavLink } from "react-router-dom";
import { userAPI } from "../../api/api";
let Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (<div className={styles.users}>
        <div className={styles.pagination}>
            {pages.map(p => <span className={props.currentPage === p ? styles.currentPage : undefined}
                onClick={() => { props.onPageChanged(p) }} >{p}
            </span>)}

        </div>
        {
            props.users.map(u => <div className={styles.userBlock} key={u.id}>
                <div className={styles.avaNbutton} >
                    <div >
                        <NavLink to={'/profile/' + u.id}><img className={styles.ava} alt='some value' src={u.photos.small != null ? u.photos.small : userPhoto} /></NavLink>
                    </div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some((id)=>id===u.id)} className={styles.unfollowbtn} onClick={() => {
            
                            props.toggleIsFollowingProgress(true,u.id)
                            userAPI.unfollowUser(u.id).then(data => {
                                if(data.resultCode === 0){
                                    props.unfollow(u.id)
                                }
                                props.toggleIsFollowingProgress(false,u.id)
                            })
                             }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some((id)=>id===u.id)}  className={styles.followbtn} onClick={() => { 
                            props.toggleIsFollowingProgress(true,u.id)
                            userAPI.followUser(u.id).then(data => {
                                if(data.resultCode === 0){
                                    props.follow(u.id)
                                }
                                props.toggleIsFollowingProgress(false,u.id)
                            })
                             }}>Follow</button>}

                </div>
                <div className={styles.nameNdescription}>
                    <h3>{u.name}</h3>
                    <div>{u.status != null ? u.status : 'Here will be a fine status...'}</div>

                </div>
                <div className={styles.location}>
                    <h4>Ukraine</h4>
                    <div>Kiyv</div>
                </div>

            </div>)
        }
    </div>)
}


export default Users;