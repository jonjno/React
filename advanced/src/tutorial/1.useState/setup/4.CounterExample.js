import React,{useState} from 'react';

const CounterExample =()=>{
const[value,setValue]= useState(1)

const Changevalue = ()=>{
    
    setValue(1)
}
const TimeIncrease=()=>{
    setTimeout(()=>{
      setValue((prev)=>{
        return prev+1;
      })
    //  Important  Here it is the value is getting from previous,current ,not from  the orginal value

    // setValue(value+1)
    // It is from orginal value
    },2000)
}
    return<>
    <section style ={{margin:'4rem 0'}}>
        Regular Counter 
         <h2>{value}</h2>
   
         <button type ="button" className='btn'  onClick={()=>setValue(value+1)}>Increase</button>
         <button type ="button" className='btn'  onClick={()=>setValue(value-1)}>Decraese</button>
           <button type ="button" className='btn'  onClick={()=>Changevalue()}>Reset</button>
    </section>
     <section style ={{margin:'4rem 0'}}>
        More Complex
         <h2>{value}</h2>
           <button type ="button" className='btn'  onClick={()=>TimeIncrease()}>TimeIncrease</button>
    </section>
 
    </>
}
export default CounterExample;