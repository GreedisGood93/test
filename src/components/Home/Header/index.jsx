import { Button, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.user.email);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" style={{ color: 'teal' }}>
        Погода
      </Typography>
      <Typography variant="span" style={{ fontSize: '18px', color: 'teal' }}>
        Профиль {userEmail}
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          navigate('/sign-in');
        }}
      >
        Выйти
      </Button>
    </div>
  );
};

export default Header;
