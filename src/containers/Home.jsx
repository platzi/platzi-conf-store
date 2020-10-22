import React from 'react';
import Products from '../components/Products';
import initialState from '../initialState';

const Home = () => {
  return (
    <Products products={initialState.products} />
  );
}

export default Home;