import React, {useState} from 'react'
import useInterval from '../hooks/useInterval'
import Timer from './Timer'
import Control from './Control'


const App = () => {
  const [time, setTime] = useState(25 * 60 * 1000)
  const [active, setActive] = useState(false)

  useInterval(()=> setTime(time - 1000), active? 1000 : null)

  const handleReset = () => {
    setTime(25)
    setActive(false)
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
          />
          <Control 
            activeStatus={[active, setActive]}
            handleReset={handleReset}
          />
        </div>
        <div className="time-control">
          button here
        </div>
      </main>
    </div>
  )
}

export default App
