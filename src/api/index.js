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
        const currentUser =
          JSON.parse(localStorage.getItem('currentUser')) || {};
        if (!currentUser.cities.includes(currentLocation.name)) {
          currentUser.cities.push(currentLocation.name);
        }
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        const users = JSON.parse(localStorage.getItem('users'));
        const userIndex = users.findIndex(
          (user) => user.mail === currentUser.mail,
        );
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
        resolve({ weatherData, currentLocation });
      })
      .catch((error) => {
        console.error('Ошибка при запросе:', error);
        reject(error);
      });
  });
};
