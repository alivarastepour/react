import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  useEffect(() => {
    getUsers()
  },[])
  const [users, setUsers] = useState([])
  const getUsers = async() => {
    const rep = await fetch(url)
    const users = await rep.json()
    setUsers(users)
  }
  return <>
    <h3>Github Users</h3>
    <ul className='users'>
    {users.map((x) => {
      const {id, login, avatar_url, html_url} = x
      return(
          <li key={id}>
            <img src={avatar_url} alt={login}/>
            <div>
              <h4>{login}</h4>
              <a href={html_url}>profile</a>
            </div>
          </li>
      );
    })}
    </ul>
  </>;
};
export default UseEffectFetchData;
