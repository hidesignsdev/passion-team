import React, {useEffect} from 'react'
import moment from 'moment'

const Timer = ({currentTime}) => {
    const [time, setTime] = currentTime
    return (
        <>
            <h2>SESSION</h2>
            <h3>{moment(time).format("mm:ss")}</h3>
        </>
    )
}

export default Timer
