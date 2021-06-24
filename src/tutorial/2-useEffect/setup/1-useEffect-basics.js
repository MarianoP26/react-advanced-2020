import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

//If you want to execute useEffect ONLY in the first render you must pass
//an empty array as a second parameter

//If you want to execute useEffect only when a value has changed you must pass
//the value variable as the second parameter (inside array [])

//useEffect is used mainly for things that executes outside the component
//like data fetching, changing document titles, listening for events, submits
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(()=>{
    console.log('useEffect called');
    if(value !== 0) document.title = `New Messages(${value})`;
  },[value])

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={()=> setValue(value + 1)}>
        Increase
      </button>
    </>
  );
};

export default UseEffectBasics;
