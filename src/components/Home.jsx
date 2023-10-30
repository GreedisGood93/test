import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Slider from './Slider';

export default function Home() {
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.user.email);
  let isAuth = useSelector((state) => state.user.isAuth);
  console.log(userEmail);
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h2">Погода</Typography>
        <Typography variant="h2">Профиль {userEmail}</Typography>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            isAuth = false;
            navigate('/sign-in');
            console.log(isAuth);
          }}
        >
          Выйти
        </Button>
      </Box>
      <Slider></Slider>
    </div>
  );
}
