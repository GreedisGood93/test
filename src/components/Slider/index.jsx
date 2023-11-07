import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

export default function Slider() {
  const [weatherData, setWeatherData] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({});
  //Call api
  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=cf5923fb527d4a26a9284517230711&q=Караганда&aqi=no&days=7&lang=ru
        `,
      )
      .then((response) => {
        console.log(response.data.location);
        setWeatherData(response.data.forecast.forecastday);
        setCurrentLocation(response.data.location);
      });
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        mt: '30px',
      }}
    >
      <Box>
        <Typography variant="h2">{currentLocation.country}</Typography>
        <Typography variant="h3">{currentLocation.name}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          mt: '30px',
          gap: '5px',
        }}
      >
        {weatherData.map((item, index) => {
          return (
            <Card
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                border: '1px solid black',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px',
                maxHeight: '300px',
                maxWidth: '200px',
              }}
              key={index}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                }}
              >
                <Typography variant="span">{item.date}</Typography>
                <img src={item.day.condition.icon} alt="icon" />
                <Typography variant="p">
                  Средняя температура: {item.day.avgtemp_c} °C
                </Typography>
                <Typography variant="p">{item.day.condition.text}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Подробнее</Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
