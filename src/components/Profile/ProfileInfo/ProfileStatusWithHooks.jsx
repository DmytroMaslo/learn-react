import React, { useEffect, useState } from "react";
import styles from "./ProfileInfo.module.css"
const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditmode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    let activateEditMode = () => {
        setEditmode(true)
    }
    let deactivateEditMode = () => {
        setEditmode(false);
        props.updateStatus(status)
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    function componentDidUpdate(prevProps, prevState){
        if (prevProps.status !== props.status) {
            setStatus(props.status)
        }
    }
    return (
        <div>
            {editMode === false ?
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
                : <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} className={styles.status} value={status} />
                </div>
            }
        </div>
    )
}
export default ProfileStatusWithHooks;