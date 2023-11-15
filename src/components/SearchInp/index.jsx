import { Button, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from 'slices/weaherSlice';
import { addingCity } from 'slices/userSlice';

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
  const cityList = useSelector((state) => state.user.cityList);
  const isSuccess = useSelector((state) => state.weather.isSuccess);
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess && city) {
      dispatch(addingCity(city));
    }
  }, [isSuccess, city]);

  const checkCity = (city) => {
    return cityList?.some((existingCity) => existingCity === city);
  };

  const handleSubmit = (values) => {
    const city = values.city;
    if (!checkCity(city)) {
      dispatch(fetchWeatherData(city));
      setCity(city);
    } else {
      console.log(city, ' Город был уже добавлен');
    }
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

            <Button variant="contained" type="submit" color="primary">
              Поиск
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SearchInp;
