import axios from 'axios';

export const getWeatherData = (city) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=cf5923fb527d4a26a9284517230711&q=${city}&aqi=no&days=7&lang=ru`,
      )
      .then((response) => {
        const weatherData = response.data.forecast.forecastday;
        const currentLocation = response.data.location;
        resolve({ weatherData, currentLocation });
      })
      .catch((error) => {
        console.error('Ошибка при запросе:', error);
        reject(error);
      });
  });
};
