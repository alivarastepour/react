import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/alivarastepour';
const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true)
  const [isError,setError] = useState(false)
  const [user, setUser] = useState([])
  const [ec, setEC] = useState(0)

  useEffect(()=>{
    setLoading(true)
    fetch(url).then((x)=>{
      if (x.status >= 200 && x.status <= 299){
        return x.json()
      }
      setEC(x.status)
      setLoading(false)
      setError(true)
    }).then((u) => {
      const {login} = u
      setUser(login)
      setLoading(false)
    }).catch(error => setError(true))
  } ,[])

  if (isLoading)
    return <div>
      <h1>Loading...</h1>
    </div>
  if (isError)
    return <div>
      <h2>ERROR {ec}</h2>
    </div>;
  return <div>
    <h1>{user}</h1>
  </div>
};

export default MultipleReturns;
