import React ,{useState} from 'react'

const Shortcircuit =()=>{

    const [text,setText]= useState('');
    const[isError,setIsError] = useState(false);
    const firstValue = text || 'Hello World';
    // OR Operator, if text is true ,it will return that value,if it is false or empty it will return second value
    const secondValue = text && 'Hello World';
    // AND Operator ,if text is true ,it will return that value ,and if text is false or empty it will return nothing


    return <>
    {/* <h2>{firstValue}</h2>
    <h1>Value:{secondValue}</h1> */}
    {text || 'Jino JOhn'}
   {/* {text && <h2>Hello World</h2>} */}
   {/* {!text && <h2>Hello World</h2>} */}
   <button className='btn' onClick={()=>setIsError(!isError)}>Toggel Error</button>
   {/* { isError && <h2>Hello World</h2>} */}
   {isError? (<h2>Error..</h2>):(<h2>Hello World</h2>)}
   
    </>
    
}
export default Shortcircuit

// inside a fragment of we try to do if statement it wont work because it doesnt return a value..so here comes short circuit and ternnary operator