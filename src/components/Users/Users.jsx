import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../img/defaultAvatar.png'
import { NavLink } from "react-router-dom";
import axios from "axios";

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
                        <NavLink to={'/profile/' + u.id}><img className={styles.ava} src={u.photos.small != null ? u.photos.small : userPhoto} /></NavLink>
                    </div>
                    {u.followed
                        ? <button className={styles.unfollowbtn} onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                withCredentials:true,
                                headers:{
                                    "API-KEY":"7f3c19d9-d088-4b96-b87d-d55584ecdcbe"
                                }
                            }).then(response => {
                                if(response.data.resultCode === 0){
                                    props.unfollow(u.id)
                                }
                            })
                             }}>Unfollow</button>
                        : <button className={styles.followbtn} onClick={() => { 
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                withCredentials:true,
                                headers:{
                                    "API-KEY":"7f3c19d9-d088-4b96-b87d-d55584ecdcbe"
                                }
                            }).then(response => {
                                if(response.data.resultCode === 0){
                                    props.follow(u.id)
                                }
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