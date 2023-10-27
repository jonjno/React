import React,{useState} from 'react'
import { data } from '../../data';


const Propdrilling = () => {
 const [people,setPeople] = useState(data);


 const removeItem = (id) => {
  setPeople((people) => {
    return people.filter((person) => person.id !== id);
  });
}


  return <section>
    <h3>Prop Drilling</h3>
    <List people={people} removeItem={removeItem}/>
  </section>
     
}

const List =({people ,removeItem})=>{
 return <>
 {people.map((person)=>{
return <SinglePerson key ={person.id}{ ...person}remove = {removeItem}/>
})}
</>
}

// we pass remove perosn through list but list doesnt need that function,
// we need to pass through all componet
// so we can avoid this porop drilling  using context Api

const SinglePerson=({id,name,remove})=>{
  return  <div className='item'>
       
        <h4>{name}</h4>
        <button onClick={()=>remove(id)}>Remove</button>
    </div>
}

export default Propdrilling
