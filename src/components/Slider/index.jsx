import React, { useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from 'slices/weaherSlice';
import { deleteCity } from 'slices/userSlice';

export default function Slider() {
  const dispatch = useDispatch();
  const cityList = useSelector((state) => state.user.cityList);
  const weatherData = useSelector((state) => state.weather.weatherData);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const users = JSON.parse(localStorage.getItem('users'));
  const userIndex = users.findIndex((user) => user.mail === currentUser.mail);
  users[userIndex] = currentUser;
  localStorage.setItem('users', JSON.stringify(users));
  useEffect(() => {
    setCurrentCityIndex(cityList.length ? cityList.length - 1 : 0);
  }, [cityList]);

  useEffect(() => {
    const currentCity = cityList[currentCityIndex];
    if (currentCity) {
      dispatch(fetchWeatherData(currentCity));
    }
  }, [currentCityIndex, cityList]);

  const handleNextCity = () => {
    if (cityList.length > 1) {
      setCurrentCityIndex((prevIndex) =>
        prevIndex < cityList?.length - 1 ? prevIndex + 1 : 0,
      );
    }
  };

  const handlePrevCity = () => {
    if (cityList.length > 1) {
      setCurrentCityIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : cityList.length - 1,
      );
    }
  };

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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          flexDirection: 'column',
        }}
      >
        <List sx={{ display: 'flex' }}>
          {cityList?.map((item, index) => (
            <ListItem
              sx={{
                cursor: 'pointer',
                color: index === currentCityIndex && 'teal',
                fontSize: index === currentCityIndex && '20px',
                borderBottom: index === currentCityIndex && '1px solid black',
              }}
              key={index}
              onClick={() => {
                setCurrentCityIndex(index);
              }}
            >
              {item}
            </ListItem>
          ))}
        </List>

        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handlePrevCity}
          >
            <ArrowBackIosNewIcon /> Назад
          </Button>
          <Box>
            <Typography variant="h2">{cityList[currentCityIndex]}</Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleNextCity}
          >
            Вперед
            <ArrowForwardIosIcon />
          </Button>
        </Box>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            currentUser.cities.splice(currentCityIndex, 1);
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            users[userIndex].cities.splice(currentCityIndex, 1);
            localStorage.setItem('users', JSON.stringify(users));
            dispatch(deleteCity(currentCityIndex));
          }}
        >
          Удалить город
        </Button>
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
        {weatherData?.map((item, index) => {
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
                  textAlign: 'center',
                  alignItems: 'center',
                  width: '150px',
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
