import React,{useState} from 'react';
import {data }from '../../../data.js';

const ArrayUseState= ()=>{
    const [peope,setPeope] = useState(data)

    const removeItem=(number)=>{
     const newpeople = peope.filter((peope)=>peope.id !== number);
     setPeope(newpeople);
    }
    // functional methood 
    // const removeItem=(number)=>{
    //  setPeope((oldpeople)=>{
    //  const newpeople = oldpeople.filter((peope)=>peope.id !== number);
    //  return newpeople
    //  });
    // }
 return <>
    {peope.map((person)=>{
        return <div className='item' key={person.id}>
            <h3> {person.name}</h3>
            <button type ="button" onClick={()=>removeItem(person.id)}>Clear {person.name}</button>
        </div>
    })}
    <button type ="button" className='btn'  onClick={()=>setPeope([])} >Clear </button>
    </>
}

export default ArrayUseState;