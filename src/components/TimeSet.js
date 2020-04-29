import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const TimeSet = ({type, value}) => {
    const [val, setValue] = value

    const handleIncrement = () => {
        if(val >= 60) return null
        else setValue(val + 1)
    }

    const handleDecrement = () => {
        if(val === 1) return null
        else setValue(val - 1)
    }
    return (
        <div className="control">
            <h2 id={`${type.toLowerCase()}-label`}>{type} Length</h2>  
            <button id={`${type.toLowerCase()}-increment`} onClick={handleIncrement}><FontAwesomeIcon icon={faPlus}/></button>
            <h3 id={`${type.toLowerCase()}-length`}>{val}</h3>
            <button id={`${type.toLowerCase()}-decrement`} onClick={handleDecrement}><FontAwesomeIcon icon={faMinus}/></button>
        </div>
    )
}

export default TimeSet
