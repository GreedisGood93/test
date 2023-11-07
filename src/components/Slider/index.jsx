import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Slider() {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedDay, setSelectedDay] = useState(0);
  //Call api
  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=cf5923fb527d4a26a9284517230711&q=Караганда&aqi=no&days=5&lang=ru
        `,
      )
      .then((response) => {
        console.log(response.data.forecast.forecastday[0].day);
        setWeatherData(response.data.forecast.forecastday);
      });
  }, []);
  const handleDayChange = (dayIndex) => {
    setSelectedDay(dayIndex);
  };
  return (
    <div
      style={{
        textAlign: 'center',
        margin: '50px auto',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'teal',
        color: 'wheat',
        width: '600px',
        minHeight: '400px',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        padding: '20px',
        boxShadow: '11px 7px 20px 12px rgba(0, 0, 0, 0.2)',
      }}
    >
      {weatherData.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.date}</h3>
            <img src={item.day.condition.icon} alt="icon" />
            <p>Средняя температура: {item.day.avgtemp_c}</p>
            <p>{item.day.condition.text}</p>
          </div>
        );
      })}
    </div>
  );
}
