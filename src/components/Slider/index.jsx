import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Slider() {
  return (
    <div
      style={{
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
        borderRadius: '40%',
        boxShadow: '11px 7px 20px 12px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography variant="h3">22°C</Typography>
      <Typography variant="h4">Влажность: 74%</Typography>
      <Typography variant="h4">Переменная облачность</Typography>
      <Typography variant="h4">Ветер: 32 км/ч</Typography>
      <Typography variant="h2">London</Typography>
    </div>
  );
}
