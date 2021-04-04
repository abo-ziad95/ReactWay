import React, { useEffect, useState } from 'react';
import Button from "./components/ui/Button";
import "./App.css"
import Timer from "./components/Timer";
import LapTimeList from "./components/LapTimeList";

let interval: NodeJS.Timeout;

function App() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<Date>()
  const [time, setTime] = useState<string>('00:00:00');
  const [timeList, setTimeList] = useState<string[]>([]);

  useEffect(() => {
    if(startTime){
      interval = setInterval(() => updateTimer(startTime), 10)
    }
    return () => {
      clearInterval(interval)
    }
  }, [startTime]);



  const updateTimer = (startTime: Date) => {
    const countFrom: number = new Date(startTime).getTime();
    const now: number = new Date().getTime();
    const timeDifference = (now - countFrom);
    const minutes = Math.floor(timeDifference / (60 * 1000));
    const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);
    const milliSeconds = Math.floor((timeDifference % 1000) / 10);

    setTime( `${String('0' + minutes).slice(-2)}:${String('0' + seconds).slice(-2)}:${String('0' + milliSeconds).slice(-2)}`);
  }

  const onStart = () => {
    setIsRunning(true);
    setStartTime(new Date())
  };

  const onStop = () => {
    setIsRunning(false);
    clearInterval(interval)
  };

  const onReset = () => {
    setIsRunning(false);
    setStartTime(undefined);
    clearInterval(interval);
    setTime('00:00:00');
    setTimeList([]);
  };

  const onLabSet = (time: string) => {
    setTimeList([...timeList, time])
  };

  return (
    <div className="app">
      <Timer time={time} />
      <div className="controls">
        {!isRunning ? <Button onClick={onStart} label={"start"}/> : <Button onClick={onStop} label={"stop"}/>}
        {isRunning && startTime ? <Button onClick={() => onLabSet(time)} label={"lap"}/> : <Button onClick={onReset} label={"reset"}/>}
      </div>
      <LapTimeList timeList={timeList} />
    </div>
  );
}

export default App;
