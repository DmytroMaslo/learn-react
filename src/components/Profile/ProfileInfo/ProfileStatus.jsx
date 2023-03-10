import React from "react";
import styles from "./ProfileInfo.module.css"
class ProfileStatus extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.statusInput = React.createRef();
    // }
    state = {
        editMode: false,
        status: this.props.status
    }
    toggleEditMode = () => {
        this.setState((state) => {
            return { editMode: !state.editMode };
        });
    }
    deactivateEditMode = () => {
        this.setState((state) => {
            return { editMode: false };
        });
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.status !== this.props.status){
            this.setState({status:this.props.status})
        }
    }
    render() {
        return (
            <div>
                {this.state.editMode === false ?
                    <div>
                        <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} ref={this.statusInput} autoFocus={true} onBlur={this.deactivateEditMode} className={styles.status} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}
export default ProfileStatus;