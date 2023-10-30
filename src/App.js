/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Regist } from './components/Regist';
import { Signin } from './components/SignIn';
import { Route, Routes, useNavigate } from 'react-router';
import Home from './components/Home';
import { useSelector } from 'react-redux';

function App() {
  let isAuth = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate('/sign-in');
    } else navigate('/');
    console.log(isAuth);
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Regist />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
