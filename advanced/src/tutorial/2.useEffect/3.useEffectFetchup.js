import React,{useEffect,useState} from 'react';
const url ='https://api.github.com/users';

const FetchData =()=>{
  const [users,setUsers]= useState([])

    const getUsers = async ()=>{
       const response = await fetch(url);
      console.log(response)
       const users =  await response.json();
        console.log(users)
       setUsers(users)
    }

    useEffect(()=>{
      getUsers()
    },[])
  return <>
  <h2>GitHub users</h2>
  <ul className='users'>
    {users.map((user)=>{
        const {id,login,avatar_url,html_url} = user
        return <l1 key ={id}>
            <img src={avatar_url} alt = {login}></img>
             <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
             </div>
        </l1>
    })}
  </ul>
  </>
  
}
export default FetchData