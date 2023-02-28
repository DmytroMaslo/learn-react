import React from "react";
import styles from './Users.module.css'
const Users = (props)=>{
    return(<div className={styles.users}>
        {
            props.users.map(u=><div className={styles.userBlock} key={u.id}>
                <div className={styles.avaNbutton}>
                    <div >
                        <img className={styles.ava} src={require('./../../img/avatars/avatar2.png')}/>
                    </div>
                    {u.followed 
                    ?<button className={styles.unfollowbtn}onClick={() =>{props.unfollow(u.id)}}>Unfollow</button>
                    :<button className={styles.followbtn} onClick={() =>{props.follow(u.id)}}>Follow</button>}
                    
                </div>
                <div className={styles.nameNdescription}>
                        <h3>{u.fullName}</h3>
                        <div>{u.description}</div>

                </div>
                <div>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                </div>

            </div>)
        }
    </div> )
}

export default Users;