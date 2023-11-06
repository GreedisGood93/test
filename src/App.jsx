import React, { useEffect } from 'react';
import { Home, Signin, Signup } from './components';
import { Route, Routes, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

function App() {
  let isAuth = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate('/sign-in');
    } else {
      navigate('/');
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
