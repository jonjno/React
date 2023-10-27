import react,{useState} from 'react';

// Js 
// const input = document.getElementById("MYtext");
// const inputValue = input.Value
// React = Value,Onchange
// when value in the form is changed value is refer to orginal value, and onchange will fire the callback
// value is refernced to state value
const Controlled =()=>{
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[person,setPerson] =useState([])

    const handleChange=(e)=>{
    
        // e is event Objec
        e.preventDefault();
       
        if(name && email){
        const people ={name,email,id:new Date().getDate().toString()} 
         console.log(person)
        setPerson((person)=>{
            return [...person,people]
        })
        setName('');
        setEmail('');
        // if preventdefault is not there,the browser will submit the from and refrrsh the page
        // its an event object
      console.log("hello world")
    }
    }

    return( <>
    <article>
        <form className='form'  onSubmit={handleChange}>
         <div className='form-control'>
         <label htmlFor='firstName'>name: </label>
            <input type='input' id="firstName" name ="firstName" value={name} onChange={(e)=>setName(e.target.value)}></input>
        
         </div>
          <div className='form-control'>
         <label htmlFor='Email'>Email:</label>
            <input type='input' id="Email" name ="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
         
         </div>
         <button type ="submit">Add person</button>
        </form>
    </article>
    {person.map((peo)=>{
     const {id,name,email} = peo;
     return <div className='item' key={id}>
       <h2>{name}</h2>
       <p>{email}</p>
     </div>
    })}
    </>)
    
}
// in react there are 2 type of submit 1) is on from by onsubmit and other on button by onclick
export default Controlled