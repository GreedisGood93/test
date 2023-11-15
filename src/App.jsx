import React, { useEffect } from 'react';
import { Home, Signin, Signup } from './components';
import { Route, Routes, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './slices/userSlice';

function App() {
  let isAuth = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Check for user authorization
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('users'));
    if (currentUser) {
      const foundUser = users.find(
        (user) =>
          user.mail === currentUser.mail && user.pas === currentUser.pas,
      );
      foundUser
        ? dispatch(loginUser(currentUser))
        : localStorage.removeItem('currentUser');
    }
  }, []);

  //If the user is not authorized, we redirect to the authorization page
  useEffect(() => {
    if (!isAuth) {
      navigate('/sign-in');
    } else {
      navigate('/');
    }
  }, [isAuth]);

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
