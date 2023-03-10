import React from "react";
import Profile from "./Profile";
import { setUserProfile, getUserProfile, updateStatus, getStatus, setStatus } from './../../redux/profile-reducer';
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../login/AuthRedirectComponent";
import { compose } from "redux";
/**api-key: 7f3c19d9-d088-4b96-b87d-d55584ecdcbe */
class ProfileContainer extends React.Component {

    componentDidMount() {
        if (!this.props.router.params.id) {
            this.props.router.params.id = this.props.userId
        }

        this.props.getUserProfile(this.props.router.params.id)
        this.props.getStatus(this.props.router.params.id)
    }
    render() {
        return (
            <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId:state.auth.userId
});

let withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, { setUserProfile, getUserProfile, updateStatus, setStatus, getStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)