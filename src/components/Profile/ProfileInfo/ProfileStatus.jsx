import React from "react";
import styles from "./ProfileInfo.module.css"
class ProfileStatus extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.statusInput = React.createRef();
    // }
    state = {
        editMode: false,
        status: this.props.userStatus
    }
    toggleEditMode = () => {
        this.setState((state) => {
            return { editMode: !state.editMode };
        });
    }
    deactivateEditMode = () => {
        this.setState((state) => {
            return { editMode: false};
        });
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) =>{
        this.setState({
            status:e.currentTarget.value
        })
        
    }
    render() {
        return (
            <div>
                {this.state.editMode === false ?
                    <div>
                        <span onDoubleClick={this.toggleEditMode}>{this.props.userStatus == undefined ? 'aaa':this.props.userStatus}</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange}ref={this.statusInput} autoFocus={true} onBlur={this.deactivateEditMode} className={styles.status} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}
export default ProfileStatus;