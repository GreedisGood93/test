/* eslint-disable prettier/prettier */
import React from 'react';
import { Regist } from './components/Regist';
import { Signin } from './components/SignIn';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/sign-up" element={<Regist />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
