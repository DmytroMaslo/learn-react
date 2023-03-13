import React from "react";
import styles from './Users.module.css'
import Paginator from "../common/paginator/Paginator";
import User from "./User";
let Users = ({currentPage,totalUsersCount,pageSize,onPageChanged, ...props}) => {
    return (<div className={styles.users}>
        <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged} />

        {
            props.users.map(user => <User
                 user={user}
                 followingInProgress={props.followingInProgress}
                 unfollow={props.unfollow}
                 follow={props.follow}
                 />)
        }
    </div>)
}


export default Users;