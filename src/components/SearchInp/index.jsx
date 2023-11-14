import { Box, Button, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from 'slices/weaherSlice';

const validateScheme = Yup.object({
  city: Yup.string()
    .required('Введите город')
    .min(2, 'Поле поиска может содержать минимум 2 символа')
    .matches(
      /^[A-Za-zА-Яа-яЁё]+$/,
      'Поле поиска не может содержать цифры и специальные символы',
    ),
});

const SearchInp = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    const city = values.city;
    dispatch(fetchWeatherData(city));
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Formik
        validationSchema={validateScheme}
        initialValues={{
          city: '',
        }}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Typography variant="span" style={{ color: 'teal' }}>
              Введите город
            </Typography>
            <TextField
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              error={touched.city && !!errors.city}
              helperText={errors.city}
              style={{ padding: '0 10px', width: '100%' }}
              placeholder="Поиск..."
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Button variant="contained" type="submit" color="primary">
                Поиск
              </Button>
              <Button variant="contained" color="primary">
                Добавить
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SearchInp;
