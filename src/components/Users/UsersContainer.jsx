import React from "react";
import { connect } from "react-redux";
import { setUsers, follow, unfollow, setCurrentPage, setTotalUsersCount, setFetching } from "../../redux/users-reducer";
import axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import { userAPI } from "../../api/api";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
        userAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
            this.props.setFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        })
    }
    onPageChanged(pageNumber) {
        this.props.setFetching(true);
        this.props.setCurrentPage(pageNumber)
        userAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.setFetching(false);
            this.props.setUsers(data.items);
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching === true
                    ? <Preloader/>
                    : null}
                <Users users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    unfollow={this.props.unfollow.bind(this)}
                    follow={this.props.follow.bind(this)}
                    onPageChanged={this.onPageChanged.bind(this)}
                />
            </>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
/** 
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {

            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setFetching: (isFetching) => {
            dispatch(setFetchingAC(isFetching))
        },

    }
}
*/
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching })(UsersAPIComponent)