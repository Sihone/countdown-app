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

      setTimeLeft(`${hours}:${minutes}:${seconds}`);
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '0', fontSize: '175px' }}>
      <h1>{timeLeft}</h1>
    </div>
  );
};

export default Countdown;
