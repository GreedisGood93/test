import { Box, Button, Input, Typography } from '@mui/material';
import { Formik } from 'formik';
import React, { useState } from 'react';
import '../style/style.css';
import * as Yup from 'yup';

const validateScheme = Yup.object({
  email: Yup.string()
    .email('введен не корректно')
    .required('поле не заполнено'),
  password: Yup.string()
    .required('поле не заполнено')
    .min(6, 'в поле должно быть не менее 6 символов')
    .max(12, 'в поле "пароль" не должно превышать 12 символов'),
});

export const Regist = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validateScheme}
        onSubmit={(e) => {
          setMail(e.email);
          setPassword(e.password);
          console.log('mail' + mail);
          console.log(e.email);
        }}
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
          </form>
        )}
      </Formik>
    </div>
  );
};
