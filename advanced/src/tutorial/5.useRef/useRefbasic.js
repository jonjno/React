import React,{useEffect,useRef} from 'react';


// useRef works as useState;
// preserve values
// it does not trigger rerender
// Targeting DOM Elemet

const useReference=()=>{

    const refContainer = useRef(null);
    const divContainer = useRef(null)

  const handleChange=(e)=>{
   e.preventDefault();
   console.log(refContainer);
   console.log(refContainer.current.value);
   console.log(divContainer)
  }

  useEffect(()=>{
   console.log(refContainer.current);
   refContainer.current.focus()
  })
//   here we dont need to add dependancy array

    return <>
        <form className='form'>
            <div>
                <input type='text' ref={refContainer}>
                    
                </input>
                <button type="submit" onClick={handleChange}>Submit</button>
            </div>
        </form>
        <div ref={divContainer}>Hello World</div>
    </>
}

export default useReference