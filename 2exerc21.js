import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return; 
    intervalRef.current = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setSeconds(0);
  };

  return (
    <div>
      <h1>{seconds} segundos</h1>
      <button onClick={startTimer}>Iniciar</button>
      <button onClick={pauseTimer}>Pausar</button>
      <button onClick={resetTimer}>Resetar</button>
    </div>
  );
};

export default Stopwatch;
