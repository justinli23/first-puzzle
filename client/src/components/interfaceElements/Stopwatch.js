import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  function handleStart() {
    setIsActive(true);
    setIsPaused(false);
  }

  function handlePause() {
    setIsPaused(!isPaused);
  }

  function handleReset() {
    setIsActive(false);
    setTime(0);
  }

  return (
    <div>
      <div>
        <div className="timer">
          <span className="digits">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          </span>
          <span className="digits">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
          </span>
          <span className="digits mili-sec">
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span>
        </div>
      </div>

      <div>
        {!isPaused ? (
          <button onClick={handlePause} id="pause">
            PAUSE
          </button>
        ) : (
          <button onClick={handleStart} id="start">
            START
          </button>
        )}

        <button onClick={handleReset} id="reset">
          RESET
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
