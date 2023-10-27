import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { data } from '../../data';


// we will get an object but it is string,
// but our id is in number so we convert using Parseint



const Person = () => {
    const {id} = useParams();
    console.log(useParams)
    const [name,setName]= useState('default Name');

    useEffect(()=>{
      const newPerson =  data.find((perosn)=>perosn.id === parseInt(id))
      setName(newPerson.name)
    },[])
  return (
    <div>
      <h1>{name}</h1>
      <Link to ='/people' className='btn'>Back to People</Link>
    </div>
  )
}

export default Person
