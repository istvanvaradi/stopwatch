import './App.css'
import { useState, useEffect } from 'react'

function App() {
  let [time, setTime] = useState(0)
  let [timerOn, setTimerOn] = useState(false)

  useEffect(() => {
    let interval = null
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 100)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerOn])

  return (
    <div className="App">
      <div className="container">
        <div id="display">
          <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
        </div>

        <h1>StopWatch</h1>
        <div className="buttons ">
          <button onClick={() => setTimerOn(true)}>START</button>
          <button onClick={() => setTimerOn(false)}>STOP</button>
          <button onClick={() => setTimerOn(true)}>Resume</button>
          <button onClick={() => setTime(0)}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
