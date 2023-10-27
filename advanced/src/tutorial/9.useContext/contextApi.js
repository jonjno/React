

import React,{useContext, useState} from 'react'
import { data } from '../../data';


 const PersonContext = React.createContext();

const ContextApi = () => {
 const [people,setPeople] = useState(data);


 

 const removeItem = (id) => {
  setPeople((people) => {
    return people.filter((person) => person.id !== id);
  });
}


  return <PersonContext.Provider value={{removeItem,people}}>
     <section>
    <h3>Context API / Use Context</h3>
    <List />
  </section>
  </PersonContext.Provider>
     
}

const List =()=>{
    const mainData= useContext(PersonContext);
    console.log(data)
 return <>
 {mainData.people.map((person)=>{
return <SinglePerson key ={person.id}{ ...person}/>
})}
</>
}

// we pass remove perosn through list but list doesnt need that function,
// we need to pass through all componet
// so we can avoid this porop drilling  using context Api

const SinglePerson=({id,name})=>{
    const {removeItem} = useContext(PersonContext)
    
  return  <div className='item'>
       
        <h4>{name}</h4>
        <button onClick={()=>removeItem(id)}>Remove</button>
    </div>
}

export default ContextApi
