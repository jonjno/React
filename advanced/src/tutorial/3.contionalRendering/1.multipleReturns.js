
import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns=()=>{

   const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(()=>{
    fetch(url)
    .then((resp)=>{
        if(resp.status>= 200 && resp.status<=299){
            return resp.json()
        }else{
            setIsLoading(false);
            setIsError(true)
            throw new Error(resp.statusText);
            // this is actual error
        }
      
    } )
    .then((user)=>{
       console.log(user)
       const {login } = user
       setUser(login)
    } )
    .catch((er)=>console.log(er))
    // this error is newtwork error
  },[])

     if(isLoading){
        return <h2>Loading...</h2>
     }
        
     if(isError){
        return <h2>Error...</h2>
     }
     if(user){
        return <h2>{user}</h2>
     }
}
export default MultipleReturns;