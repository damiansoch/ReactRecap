import React from 'react';
import { useContext } from 'react';
import ValueContext from '../ValueContext';

const Child = () => {
  const value = useContext(ValueContext);
  return (
    <>
      <h1>Check</h1>
      <h3>Child component</h3>
      <h4>The value is: {value.toString()}</h4>
    </>
  );
};

export default Child;
