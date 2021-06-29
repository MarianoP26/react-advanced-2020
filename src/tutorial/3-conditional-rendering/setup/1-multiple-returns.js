import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});


  const fetchUsers = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setUser(data);
    setLoading(false);
  };

  useEffect(()=>{
    fetchUsers();
  },[]);

  if (loading) {
    return(
    <>
      <h1> Loading...</h1>
    </>
    )
  }
  const {avatar_url, name, location} = user;
  return <section>
    <img src={avatar_url} alt={name}></img>
    <h3>{name}</h3>
    <h5>{location}</h5>
  </section>
};

export default MultipleReturns;
