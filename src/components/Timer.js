import React from 'react'

const Timer = ({currentTime, currentMode}) => {
    const [time, setTime] = currentTime
    const [mode, setMode] = currentMode
    let minute , second = null
    minute = Math.floor(time / 60)
    second = (time) % 60
    if(second < 10) second= "0"+second
    if(minute < 10) minute= "0"+minute
    return (
        <>
            <h2 id="timer-label">{mode === 'session'? 'Session' : 'Break'}</h2>
            <h3 id="time-left">{minute}:{second}</h3>
        </>
    )
}

export default Timer
