import React from "react";
import { connect } from "react-redux";
import { setUsersAC,followAC,unfollowAC,setCurrentPageAC,setTotalUsersCountAC } from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Uers";

class UsersAPIComponent extends React.Component{
    
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    onPageChanged(pageNumber){
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>{
                this.props.setUsers(response.data.items);
        })
    }

    
    render(){
        return(
            <Users users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            unfollow = {this.props.unfollow.bind(this)}
            follow = {this.props.follow.bind(this)}
            onPageChanged={this.onPageChanged.bind(this)}
            />
        )
    }
}

let mapStateToProps = (state)=>{
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        newparam:'param'
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
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent)