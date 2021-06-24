import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);


  /*Have in mind useEffect calls getUsers and getUsers modifies the state
  recalling useEffect again and making it an infinite loop.
  Thats why useEffect function has an empty array as a dependency*/
  const getUsers = async() =>{
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }

  useEffect(()=>{
    getUsers();
  },[]);

  return (
    <>
      <h3>Users</h3>
        <ul className="users">
          {users.map((user)=>{
            const { id, login, avatar_url, html_url} = user;
            return <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          })}
        </ul>
    </>  
  );
};

export default UseEffectFetchData;
