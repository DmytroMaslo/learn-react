import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from './../../redux/profile-reducer';
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
/**api-key: 7f3c19d9-d088-4b96-b87d-d55584ecdcbe */
class ProfileContainer extends React.Component{

    componentDidMount() {
        if(!this.props.router.params.id){
            this.props.router.params.id = 28174
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.router.params.id}`).then(response => {
            console.log(response.data)
            this.props.setUserProfile(response.data);
        })
    }
    render(){
        return(
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps = (state) =>({
    profile:state.profilePage.profile
});
let withRouter  = (Component) => {
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
export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));