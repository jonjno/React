import React,{useState} from 'react';

const ObjectExample =()=>{
    const [person,setPerson] = useState({name:'jino',age:25,message :"No Message"});

    // Multiple State values
    // const [name,setName] = useState("jino")
    // const [age,setAge]= useState(25);
    // const [message,setMessage]=useState("hey hello")

    const ChangeMessage=()=>{
        console.log("hello")
      setPerson({...person,message:"hello world"})
    //   setAge(30);
    //   spread operator,so perosn value will  be there and can also overwrite message
    
    }
    return <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    {/* <h3>{age}</h3> */}
    <button type='button' className='btn' onClick={ChangeMessage}>Change Message</button>
    </>
}

export default ObjectExample