//Bad using (not even using) of react_useState. Page is not refreshing the value of title
import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  const handleClick = () => {
    title = 'new title';
    console.log(title);
  }

  return <React.Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>
      Change title
    </button>
  </React.Fragment>
};

export default ErrorExample;
