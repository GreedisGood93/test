import { Button, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
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
  const handleSubmit = (values) => {
    console.log(values);
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
              Подтвердить
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SearchInp;
