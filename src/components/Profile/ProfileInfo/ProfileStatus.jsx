import React from "react";
import styles from "./ProfileInfo.module.css"
class ProfileStatus extends React.Component{
    changeStatus(){
        return false
    }
    state = {
        editMode:false
    }
    toggleEditMode(){
        this.setState((state) => {
            return {editMode: !state.editMode};
          });
    }
    render() {
        return (
            <div>
                {this.state.editMode === false ?
                <div>
                    <span onDoubleClick={this.toggleEditMode.bind(this)}>{this.props.aboutMe !== undefined
                        ? this.props.aboutMe
                        : ''}</span>
                </div>
                :<div>
                    <input autoFocus={true} onBlur={this.toggleEditMode.bind(this)} onChange={this.changeStatus}className={styles.status} value={this.props.aboutMe !== undefined
                        ? this.props.aboutMe
                        : ''} />
                </div>
                }
            </div>
        )
    }
}
export default  ProfileStatus;