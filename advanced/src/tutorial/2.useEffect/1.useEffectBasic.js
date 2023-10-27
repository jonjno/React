import React ,{useEffect,useState} from 'react';

// by default it runs after every re-render useEffect.
// callback function will reun every renrender'


const useEffectBasic = ()=>{
    const [value,setValue] = useState(0)
    useEffect(()=>{
    console.log("useEffect")
    if(value>2){
      document.title=`New Message(${value})`
    }
//    inside the call back function we can add condition,
 // it will not change the title now as it is rendered many times.dependenacy
    },[value])
//    useeffect will rerender everytime wehn the value got updated
    console.log("render")

    useEffect(()=>{
        console.log("Hai ,How are You")
    },[])
    return <>
    <h2>{value}</h2>
    <button type ='button' className='btn' onClick={()=>setValue(value+1)} > Click me</button>
    </>
}
// when button is clicked the setvalue function is invoked , so now the usestate  do 2 things
//  preserve the value between 2 states, and it will trigger re render  which will automatticalu invoke useeffect

export default useEffectBasic;