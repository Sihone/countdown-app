// src/Countdown.js
import React, { useState, useEffect } from 'react';
import { differenceInSeconds, format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const targetDate = new Date('2024-08-02T10:15:00+01:00');

    const updateTimer = () => {
      const now = new Date();
      const cameroonTime = toZonedTime(targetDate, 'Africa/Douala');
      const secondsLeft = differenceInSeconds(cameroonTime, now);

      if (secondsLeft <= 0) {
        setTimeLeft('Time is up!');
        return;
      }

      const hours = Math.floor(secondsLeft / 3600);
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = secondsLeft % 60;

      setTimeLeft(`${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`);
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src="./logo.png" alt="Primetec Academy" width="40%" />
      <h1 style={{ fontSize: '275px' }}>{timeLeft}</h1>
      <h5 style={{ fontSize: '50px' }}>AI & TECH CAREER ORIENTATION 2024 SEMINAR</h5>
    </div>
  );
};

export default Countdown;
