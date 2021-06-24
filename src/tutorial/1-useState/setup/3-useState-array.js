import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    //.filter returns an array with all the elements that matches the condition
    let _people = people.filter((person)=>person.id !== id);
    setPeople(_people);
  }

  return (
  <>
    {people.map((person) => {
      const {id, name} = person; //Deconstruct person object
      return (
      <div key={id} className="item">
        <h4>{name}</h4>
        <button onClick={()=> removeItem(id)}>remove</button>
      </div>
      )
    })
  }
    <button className="btn" onClick={() => setPeople([])}>
      Clear
    </button>
  
  </>
  );
}
export default UseStateArray;
