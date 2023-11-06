import React from 'react';
import { Box, Button, TextField, Typography, styled } from '@mui/material';
import { Formik } from 'formik';

export default function Slider() {
  const SearchInp = styled('div')(({ theme }) => ({
    backgroundColor: '#F5F5F5',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
  }));

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Formik>
          <form>
            <SearchInp>
              <TextField
                placeholder="Поиск..."
                sx={{
                  width: '100%',
                  fontSize: '20px',
                }}
              />
            </SearchInp>
            <Button variant="contained" color="primary">
              Подтвердить
            </Button>
          </form>
        </Formik>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          margin: '50px auto',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'teal',
          color: 'wheat',
          width: '600px',
          minHeight: '400px',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          padding: '20px',
        }}
      >
        <Box>
          <Typography variant="h3">22°C</Typography>
          <Typography variant="h4">Влажность: 74%</Typography>
          <Typography variant="h4">Переменная облачность</Typography>
          <Typography variant="h4">Ветер: 32 км/ч</Typography>
        </Box>
        <Typography variant="h2">London</Typography>
      </Box>
    </div>
  );
}