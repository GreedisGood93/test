import { Box, Button, Input, Typography } from '@mui/material';
import { Formik } from 'formik';
import React, { useState } from 'react';
import '../style/style.css';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const validateScheme = Yup.object({
  email: Yup.string()
    .email('Неверный email')

    .required('Обязательное поле'),
  password: Yup.string()
    .required('Обязательное поле')
    .min(
      6,

      'В поле пароль, должно быть не менее 6 символов и не должно превышать 12 символов',
    )
    .max(
      12,
      'в поле пароль, не должно превышать 12 символов и не менее 6 символов',
    ),
});

export const Regist = () => {
  const checkUserAlreadyRegistered = (arr, userObj) => {
    return arr.find((user) => user.mail === userObj.mail);
  };
  const newUser = (e) => {
    console.log(e.password);
    console.log(e.email);
    let user = {
      mail: e.email,
      pas: e.password,
    };
    let arr = [];
    if (localStorage.getItem('users')) {
      arr = JSON.parse(localStorage.getItem('users'));
      if (!checkUserAlreadyRegistered(arr, user)) {
        arr.push(user);
        localStorage.setItem('users', JSON.stringify(arr));
      } else {
        console.log('Пользователь уже существует');
      }
    } else {
      arr.push(user);
      localStorage.setItem('users', JSON.stringify(arr));
      // setWarningUserRegisted(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validateScheme}
        onSubmit={newUser}
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
            <Typography variant="h1" sx={{ color: 'teal' }}>
              Регистрация
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <Input
                sx={{ width: '200px', fontSize: '25px' }}
                id="email"
                type="email"
                placeholder="Введите email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={touched.email && errors.email}
              />
              {touched.email && errors.email ? (
                <Typography variant="p" sx={{ color: 'teal' }}>
                  {errors.email}
                </Typography>
              ) : null}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Input
                sx={{ width: '200px', fontSize: '25px' }}
                id="password"
                name="password"
                type="password"
                placeholder="Введите пароль"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                error={touched.password && errors.password}
              />
              {touched.password && errors.password ? (
                <Typography variant="p" sx={{ color: 'teal' }}>
                  {errors.password}
                </Typography>
              ) : null}
            </Box>
            <Button type="submit" variant="contained" color="success">
              Подтвердить
            </Button>
            <Typography variant="p">
              У вас уже есть аккаунт?
              <Link to={'/sign-in'}>Войти</Link>
            </Typography>
          </form>
        )}
      </Formik>
    </div>
  );
};
