// src/components/DateTime.js
import React, { useState, useEffect } from 'react';

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{currentTime.toLocaleDateString()}</p>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default DateTime;
