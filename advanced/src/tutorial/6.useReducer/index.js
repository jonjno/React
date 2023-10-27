import React ,{useReducer,useState}from 'react';
import Modal from './Modal.js';
import { data } from '../../data.js';
import { reducer } from './Reducer.js';

const Index = () => {
    const [name,setName] = useState('');
    // const[people,setPeople] = useState([])
    // const[modal,setModal]  = useState(false);
       const defaultValues ={
        people:[],
        isModel:false,
        ModalContent:"Hello World"
       }
      
    const [state,dispatch] = useReducer(reducer,defaultValues)

 
        const handleSubmit=(e)=>{
          e.preventDefault();
          if(name){
            const newItem = {id: new Date().getDate().toString(),name}
            dispatch({type:'ADD ITEM',payload:newItem})
            // setModal(true);
            // setPeople([...people,{id:new Date().getDate().toString(),name}])
            // setName('')
          }  else{
           dispatch({type:"NO VALUE"})
            //  setModal(true)
          }
        }

        const closeModal =()=>{
          dispatch({type:"CLOSE MODAL"})
        }

  return <>
  {state.isModel && <Modal closeModal={closeModal} modalContent={state.ModalContent}/>}
  <form className='form' onSubmit={handleSubmit}>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
    <button type='submit'>Add</button>
  </form>
  <div>
    {state.people.map((peo)=>{
     const {id,name} = peo;
return <><p key ={id}>{name}</p>
<button onClick={()=>dispatch({type:"REMOVE ITEM",payload:id})}>Remove</button>
</>
    })
    
    }
   
  </div>
  </>
   
}

export default Index
