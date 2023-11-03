import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Slider from '../Slider';

export default function Home() {
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.user.email);
  let isAuth = useSelector((state) => state.user.isAuth);
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Погода</h1>
        <Typography variant="h2">Профиль {userEmail}</Typography>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            isAuth = false;
            navigate('/sign-in');
          }}
        >
          Выйти
        </Button>
      </Box>
      <Slider />
    </div>
  );
}
