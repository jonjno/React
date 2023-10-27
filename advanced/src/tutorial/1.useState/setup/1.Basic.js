import React ,{useState} from 'react';
// useState is a function from raect and alsp named component so curly braces

const useStateBasic=()=>{
    console.log(useState);
    // console.log(useState())
    // cl(useState)=>display function structure
    // if cl(useState())=>display both undefined and function ,logging undefined
    //  because it has no value intailised
    // cl(usestate("hai"))=>display hai as it is now intialised with string hai
    // const value = useState(1)[0];
    // const fun = useState(1)[1];
    // console.log(value) output = 1,
    // console.log(fun) output = function 


    //  array destructruing is this so  now we are desturtung  use state 
    const [text,setText] = useState("hey Jino")
    // text is value and settext is function of usestate 

    const handler =()=>{
        // setText("helo people")
        // only once so for toggling effect
        if(text ==="hey Jino"){
            setText("helo people")
        }else{
            setText("hey Jino")
        }
    }
    return (
     <React.Fragment>
        <h2>{text}</h2>
        <button className='btn' onClick={handler}>Chaneg Text</button>

     </React.Fragment>
    )
   
}
export default  useStateBasic

// notes by instructor
// component must be in uppercase
// use must be inside component 
// cannot call conditonally 