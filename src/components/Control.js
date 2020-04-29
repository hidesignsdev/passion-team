import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'


const Control = ({activeStatus, handleReset}) => {
    const [active, setActive] = activeStatus
    return (
        <div className="control-wrapper">
            <button id="start_stop" onClick={()=>setActive(!active)} ><FontAwesomeIcon icon={active? faPause : faPlay}/></button>
            <button id="reset" onClick={handleReset}><FontAwesomeIcon icon={faRedo}/></button>
        </div>
    )
}

export default Control
