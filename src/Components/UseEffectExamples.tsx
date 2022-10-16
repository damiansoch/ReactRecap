import React, { useEffect, useState } from 'react';

const UseEffectExamples = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log('component loaded');

    return () => {
      //runs before component is destroyed
      console.log('the conponent will be destroyed');
    };
  }, []);

  useEffect(() => {
    document.title = `${clicks} times`;
  }, [clicks]);
  return (
    <>
      <h1>UseEffectExamples</h1>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
    </>
  );
};

export default UseEffectExamples;
