import { Box, Button, Input, Typography } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loginUser } from '../slices/userSlice';

const validateScheme = Yup.object({
  email: Yup.string()
    .email('Не корректно введен email')

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

export const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userAlredyExist = (values) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log(users);
    const user = users.find(
      (user) => user.mail === values.email && user.pas === values.password,
    );
    console.log(user);
    if (user) {
      toast.success('Успешная авторизация');
      dispatch(loginUser(user));
      navigate('/');
    } else {
      toast.error('Неправильный email или пароль');
      console.log('Неправильный email или пароль');
    }
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Formik
        validationSchema={validateScheme}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={userAlredyExist}
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
              Авторизация
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
                sx={{ width: '300px', fontSize: '25px', marginBottom: '10px' }}
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
              <Input
                sx={{ width: '300px', fontSize: '25px' }}
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
              <Button
                sx={{ marginTop: '20px' }}
                type="submit"
                variant="contained"
                color="success"
              >
                Подтвердить
              </Button>
            </Box>
            <Typography variant="p">
              <Link to={'/sign-up'}>Регистрация</Link>
            </Typography>
          </form>
        )}
      </Formik>
    </div>
  );
};
