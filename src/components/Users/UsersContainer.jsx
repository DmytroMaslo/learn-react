import React from "react";
import { connect } from "react-redux";
import { setUsers, follow, unfollow, setCurrentPage, setTotalUsersCount, setFetching, toggleIsFollowingProgress,getUsers } from "../../redux/users-reducer";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import { userAPI } from "../../api/api";
import { getCurrentPagesSelector, getFollowingInProgressSelector, getIsFetchingSelector, getPageSizeSelector, getTotalUsersCountSelector, getUsersDificultSelector } from "../../redux/users-selectors";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
        
    }
    onPageChanged(pageNumber) {
        this.props.getUsers(pageNumber,this.props.pageSize)

    }

    render() {
        return (
            <>
                {this.props.isFetching === true
                    ? <Preloader/>
                    : null}
                <Users {...this.props} onPageChanged={this.onPageChanged.bind(this)}
                />
            </>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersDificultSelector(state),
        pageSize:getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPagesSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress:getFollowingInProgressSelector(state),
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
    setFetching,
    toggleIsFollowingProgress, 
    getUsers})(UsersAPIComponent)