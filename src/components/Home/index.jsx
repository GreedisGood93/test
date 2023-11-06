import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.user.email);
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h1">Погода</Typography>
        <Typography variant="span">Профиль {userEmail}</Typography>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            navigate('/sign-in');
          }}
        >
          Выйти
        </Button>
      </Box>
      {/* <Slider /> */}
    </div>
  );
}
