import react,{useState} from 'react';

// Code refactoring.
// instead of many usestate and functions we are writing it into one function
// dynamic object properties
const Controlled =()=>{
    // const[name,setName]=useState('');
    // const[email,setEmail]=useState('');
    // const[Age,setAge]=useState('');
    const[person,setPerson] =useState({firstname:'',Email:'',Age:''});
    const[people,setPeople] =useState([])


   const handleChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person,[name]:value})
   }

    const handleSubmit=(e)=>{
    
        // e is event Object
         e.preventDefault();
         if(person.firstname && person.Email&& person.Age){
            const newperson={...person,id:new Date().getDate().toString()}
            setPeople([...people,newperson])
            setPerson({firstname:'',Email:'',Age:''})
         }
        // if(name && email){
        // const people ={name,email,id:new Date().getDate().toString()} 
        //  console.log(person)
        // setPerson((person)=>{
        //     return [...person,people]
        // })
        // setName('');
        // setEmail('');
        // if preventdefault is not there,the browser will submit the from and refrrsh the page
        // its an event object
      console.log("hello world")
    }
    

    return( <>
    <article>
        <form className='form'  onSubmit={handleSubmit}>
         <div className='form-control'>
         <label htmlFor='firstName'>name: </label>
            <input type='input' id="firstName" name ="firstname" value={person.firstname} onChange={handleChange}></input>
        
         </div>
          <div className='form-control'>
         <label htmlFor='Email'>Email:</label>
            <input type='input' id="Email" name ="Email" value={person.Email} onChange={handleChange}></input>
         
         </div>
             <div className='form-control'>
         <label htmlFor='Age'>Age:</label>
            <input type='input' id="Age" name ="Age" value={person.Age} onChange={handleChange}></input>
         
         </div>
         <button type ="submit" onClick={handleSubmit}>Add person</button>
        </form>
    </article>
    {people.map((peo)=>{
     const {id,firstname,Email,Age} = peo;
     return <div className='item' key={id}>
       <h2>{firstname}</h2>
       <p>{Email}</p>
          <p>{Age}</p>
     </div>
    })}
    <article/>
    </>)
    
}
// in react there are 2 type of submit 1) is on from by onsubmit and other on button by onclick
export default Controlled