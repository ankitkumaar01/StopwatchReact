import React, { useEffect, useState } from "react";
import "./Stopwatch.css"

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((PrevTime) => PrevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const StopwatchStart = () => setIsRunning(true);
  const StopwatchStop = () => setIsRunning(false);
  const StopwatchReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const miliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));

    const hoursString = hours < 10 ? `0${hours}` : hours;
    const minutesString = minutes < 10 ? `0${minutes}` : minutes;
    const secondsString = seconds < 10 ? `0${seconds}` : seconds;
    const milisecondsString =
      miliseconds < 10 ? `0${miliseconds}` : miliseconds;

    return (
      <>
        <span>{hoursString}:</span> 
        <span>{minutesString}:</span>
        <span>{secondsString}:</span>
        <span className="miliseconds">{milisecondsString}</span>
      </>
    );
  };

  return (
    <div className="container">
      <h2 className="format_time">{formatTime(time)}</h2>
      <div className="btn_section">
        <button className="start" onClick={StopwatchStart}>
          Start
        </button>
        <button className="stop" onClick={StopwatchStop}>
          Stop
        </button>
        <button className="reset" onClick={StopwatchReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
