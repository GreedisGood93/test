import { Button, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logoutUser } from '../../slices/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.email);
  // let isAuth = useSelector((state) => state.user.isAuth);
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
          dispatch(logoutUser());
          navigate('/sign-in');
          localStorage.removeItem('currentUser');
        }}
      >
        Выйти
      </Button>
    </div>
  );
};

export default Header;
