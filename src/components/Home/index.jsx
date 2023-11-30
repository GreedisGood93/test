import { Header, SearchInp, Slider } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const cityList = useSelector((state) => state.user.cityList);
  return (
    <div>
      <Header />
      <SearchInp />
      {cityList.length && <Slider />}
    </div>
  );
}
