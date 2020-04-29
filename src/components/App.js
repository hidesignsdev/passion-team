import React, {useState, useEffect, useRef} from 'react'
import useInterval from '../hooks/useInterval'
import Timer from './Timer'
import Control from './Control'
import TimeSet from './TimeSet'

import sound from '../AlienSiren.mp3'

const App = () => {
  const [breakValue, setBreakValue] = useState(5)
  const [sessionValue, setSessionValue] = useState(25)
  const [mode, setMode] = useState('session')
  const [time, setTime] = useState(sessionValue * 60)
  const [active, setActive] = useState(false)
  const beep = useRef()

  useInterval(()=> setTime(time - 1), active? 1000 : null)

  useEffect(() => {
    setTime(sessionValue * 60)
  }, [sessionValue])

  useEffect(() => {
    if(time === 0 && mode === 'session'){
      setMode('break')
      setTime(breakValue * 60)
      beep.current.play()
    } else if(time === 0 && mode === 'break'){
      setMode('session')
      setTime(sessionValue * 60)
      beep.current.play()
    }
  }, [time])

  const handleReset = () => {
    beep.current.pause()
    beep.current.currentTime = 0
    setActive(false)
    setMode('session')
    setSessionValue(25)
    setBreakValue(5)
    setTime(25 * 60)
  }
  
  return (
    <div className="container">
      <header>
        <h1>POMODORO CLOCK</h1>
      </header>
      <main>
        <div className="time-wrapper">
          <Timer 
            currentTime={[time, setTime]}
            currentMode={[mode, setMode]}
          />
          <Control 
            activeStatus={[active, setActive]}
            handleReset={handleReset}
          />
        </div>
        <div className="time-control">
          <TimeSet value={[breakValue, setBreakValue]} type='Break'/>
          <TimeSet value={[sessionValue, setSessionValue]} type='Session'/>
        </div>
      </main>
      <audio id='beep' src={sound} ref={beep}/>
    </div>
  )
}

export default App
