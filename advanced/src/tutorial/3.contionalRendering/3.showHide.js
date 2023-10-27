import React,{useState,useEffect} from 'react';
// toggling the component
// event listener so clean up of event lister is very important here even if we use [] this in useeffect,



const Component = ()=>{
const [show,setShow]= useState(false);
return<>
<button className='btn' onClick={()=>setShow(!show)}> Toggle</button>
{show&& <Item/>}
</>

}


const Item =()=>{
const [size,setSize]= useState(window.innerWidth)
 
const checkSize = ()=>{
  setSize(window.innerWidth)
}

 useEffect(()=>{
     window.addEventListener("resize",checkSize)
     return()=>
     {
      window.removeEventListener('resize',checkSize)
     }
 },[])

 return <>
    <h2>Window Size is:</h2>
     <h2>Size: {size} px</h2>
 </>

}
export default Component;