// src/components/Weather.js
import React, { useEffect, useState } from 'react';

const Weather = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });

          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f42f56d7cb7cefb9ae378f286aff2af4`)
            .then((response) => response.json())
            .then((data) => setWeather(data))
            .catch((error) => setError(error.message));
        },
        (error) => setError(error.message)
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <p>Latitude: {location.lat}, Longitude: {location.lon}</p>
          {weather && (
            <>
              <p>Temperature: {weather.main.temp} K</p>
              <p>Weather: {weather.weather[0].description}</p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Weather;
