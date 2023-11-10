import axios from 'axios';

export const getWeatherData = async () => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=cf5923fb527d4a26a9284517230711&q=Караганда&aqi=no&days=7&lang=ru`,
    );
    return {
      weatherData: response.data.forecast.forecastday,
      currentLocation: response.data.location,
    };
  } catch (error) {
    console.error('Ошибка при запросе:', error);
    throw error;
  }
};
