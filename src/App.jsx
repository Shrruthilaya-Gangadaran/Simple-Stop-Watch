import React, { useContext, useState, useRef } from 'react';
import stopwatch from './assets/stopwatch.png';
import './App.css';
import { TimerContext } from './Components/TimerContext.jsx';

function App() {
  const {DisplayTimer,Start,Stop,Reset} = useContext(TimerContext)
  return (
    <React.Fragment>
      <h2>Stopwatch</h2>
      <div className="main-div">
        <p className="timer-image">
          <img src={stopwatch} alt="img" height={20} width={18} /> Timer
        </p>
        <DisplayTimer />
        <button className="start-button" onClick={Start}>Start</button>
        <button className="stop-button" onClick={Stop}>Stop</button>
        <button className="reset-button" onClick={Reset}>Reset</button>
      </div>
    </React.Fragment>
  );
}

export default App;
