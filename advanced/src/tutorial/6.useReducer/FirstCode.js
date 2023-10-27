import React ,{useReducer,useState}from 'react';
import Modal from './Modal.js';
import { data } from '../../data.js';

const FirstCode = () => {
    const [name,setName] = useState('');
    const[people,setPeople] = useState([])
    const[modal,setModal]  = useState(false)
 
        const handleSubmit=(e)=>{
          e.preventDefault();
          if(name){
            setModal(true);
            setPeople([...people,{id:new Date().getDate().toString(),name}])
            setName('')
          }  else{
             setModal(true)
          }
        }

  return <>
  {modal && <Modal/>}
  <form className='form' onSubmit={handleSubmit}>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
    <button type='submit'>Add</button>
  </form>
  <div>
    {people.map((peo)=>{
     const {id,name} = peo;
return <p key ={id}>{name}</p>
    })
    
    }
   
  </div>
  </>
   
}

export default FirstCode
