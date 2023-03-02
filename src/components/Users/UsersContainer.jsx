import React from "react";
import Users from "./UsersС";
import { connect, Connect } from "react-redux";
import { setUsersAC,followAC,unfollowAC,setCurrentPageAC,setTotalUsersCountAC } from "../../redux/users-reducer";

let mapStateToProps = (state)=>{
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(currentPage)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users)