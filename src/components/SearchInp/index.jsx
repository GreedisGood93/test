import { Button, InputBase, Typography, styled } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';

const SearchInp = () => {
  const SearchInp = styled('div')(({ theme }) => ({
    backgroundColor: '#F5F5F5',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
  }));
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Formik>
        <form>
          <Typography variant="span" style={{ color: 'teal' }}>
            Введите город
          </Typography>
          <SearchInp style={{ padding: '0 10px', width: '100%' }}>
            <InputBase
              placeholder="Поиск..."
              style={{ padding: '10px', width: '100%' }}
            />
          </SearchInp>

          <Button variant="contained" color="primary">
            Подтвердить
          </Button>
        </form>
      </Formik>
    </div>
  );
};

export default SearchInp;
