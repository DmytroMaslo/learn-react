import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../img/defaultAvatar.png'
const Users = (props)=>{
    return(<div className={styles.users}>
        {
            props.users.map(u=><div className={styles.userBlock} key={u.id}>
                <div className={styles.avaNbutton}>
                    <div >
                        <img className={styles.ava} src={u.photos.small !=null ? u.photos.small : userPhoto }/>
                    </div>
                    {u.followed 
                    ?<button className={styles.unfollowbtn}onClick={() =>{props.unfollow(u.id)}}>Unfollow</button>
                    :<button className={styles.followbtn} onClick={() =>{props.follow(u.id)}}>Follow</button>}
                    
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
    </div> )
}

export default Users;