import React, { useState, useEffect } from 'react';

const GeolocationExample = () => {
  const [country, setCountry] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
          .then((response) => response.json())
          .then((data) => setCountry(data.countryName))
          .catch((error) => console.log(error));
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      <h1>Your location:</h1>
      <p>{country}</p>
    </div>
  );
};

export default GeolocationExample;
