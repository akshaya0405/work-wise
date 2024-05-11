import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [intervals, setIntervals] = useState([]);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
    setIntervals([]);
  };

  const saveInterval = () => {
    setIntervals([...intervals, seconds]);
    setSeconds(0);
    setIsActive(false);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const secs = time % 60;

    const displayHours = hours < 10 ? `0${hours}` : hours;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displaySeconds = secs < 10 ? `0${secs}` : secs;

    return `${displayHours}:${displayMinutes}:${displaySeconds}`;
  };

  return (
    <div className="flex flex-col items-center">
      <div className=" mt-8 font-bold text-[48px] text-indigo-950 selection:text-green-400 selection:bg-white">
        Focus Time!
      </div>
      <div className="flex">
        <div>
          <div className="bg-white rounded-full h-56 w-56 relative border-[25px] border-red-400">
            <div className="absolute top-[4.6rem] left-[2.1rem] font-extrabold text-2xl">
              {" "}
              {formatTime(seconds)}
            </div>
          </div>
          <div className="m-8 flex space-x-8 -ml-16">
            <button
              className={`rounded-lg ${
                isActive ? "bg-red-500" : "bg-lime-500"
              }  p-2 text-white font-bold w-24 shadow-lg hover:scale-110 hover:translate-y-1 hover:transition ease-in-out`}
              onClick={toggleTimer}
            >
              {isActive ? "Stop" : "Start"}
            </button>
            {/* <button onClick={pauseTimer} disabled={!isActive}>
          Pause
        </button> */}
            <button
              className="rounded-lg bg-yellow-400 p-2 text-white font-bold w-24 shadow-lg hover:scale-110 hover:translate-y-1 hover:transition ease-in-out"
              onClick={resetTimer}
            >
              Restart
            </button>
            <button
              className="rounded-lg bg-blue-500 p-2 text-white font-bold w-24 shadow-lg hover:scale-110 hover:translate-y-1 hover:transition ease-in-out"
              onClick={saveInterval}
            >
              Save
            </button>
          </div>
        </div>
        <div className="m-6 mt -2 ml-12">
          <h2 className="text-indigo-900 font-bold italic text-2xl -mt-4  ">
            Saved Intervals
          </h2>
          <ul>
            {intervals.map((interval, index) => (
              <li
                key={index}
                className="bg-white m-1 rounded-lg text-center p-2 font-semibold odd:text-lime-500 even:text-blue-400 shadow-lg hover:scale-110 hover:translate-y-1 hover:transition ease-in-out "
              >
                {formatTime(interval)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Timer;
