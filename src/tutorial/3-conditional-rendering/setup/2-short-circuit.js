import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const [error, setError] = useState(false);
  const [text,setText] = useState('');
  // || -> If text is false(empty) then it will return the other output
  // && -> if text is true then it will return the output
  //const firstValue = text || 'hello world';
  //const secondValue = text && 'hello world';

  return (
    <>
      <h1>{text || 'default value'}</h1>
      <button className="btn" onClick={()=>setError(!error)}>
        toggle error
      </button>
      {text && <h1>hello world</h1>}
      {error? <h1>error on</h1> : <h1>error off</h1>}
    </>
  )
};

export default ShortCircuit;
