import React, { useState } from 'react';

const UseStateBasics = () => {

  const [text, setText] = useState('random title'); //IMPORTANT

  const handleClick = () => {
    if(text === 'random title'){
      setText('hello there!');
    }else{
      setText('random title');
    }
    
  }

  return ( 
  <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}>
      Change Title
    </button>
  </React.Fragment>
  );
};

export default UseStateBasics;
