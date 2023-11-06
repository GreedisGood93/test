import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import '../Signup/style.css';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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

export default function SignUp() {
  const navigate = useNavigate();

  const getUser = (users, newUser) => {
    return users.some((user) => user.mail === newUser.mail);
  };

  const newUser = (e) => {
    const user = {
      mail: e.email,
      password: e.password,
    };

    const resetForm = (e) => {
      e.password = '';
      e.email = '';
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (getUser(users, user)) {
      toast.error('Аккаунт уже существует');
    } else {
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      toast.success('Аккаунт успешно зарегистрирован');
      if (localStorage.getItem('users')) {
        navigate('/sign-in');
      } else {
        navigate('/');
      }
      resetForm(e);
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
              <TextField
                sx={{ width: '200px', fontSize: '25px' }}
                id="email"
                type="email"
                placeholder="Введите email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={touched.email && !!errors.email}
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
              <TextField
                sx={{ width: '200px', fontSize: '25px' }}
                id="password"
                name="password"
                type="password"
                placeholder="Введите пароль"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                error={touched.password && !!errors.password}
              />
              {touched.password && errors.password ? (
                <Typography variant="p" sx={{ color: 'teal' }}>
                  {errors.password}
                </Typography>
              ) : null}
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ marginTop: '10px' }}
            >
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
}
