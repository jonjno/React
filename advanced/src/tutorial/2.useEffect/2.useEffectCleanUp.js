import React,{useEffect,useState} from 'react'

const useCleanUp =()=>{
    const [size,setSize] = useState(window.innerWidth);

    const checkSize =()=>{
        setSize (window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener("resize",checkSize);
        return (()=>{
            window.removeEventListener('resize',checkSize)
        })
        // it will clean up.Here we do need to do clean up  whwn [],it is used or else we needed
        // when ever we use side effect like listeners we should add clean up meanse inside return ther should be remove 
    },[])
    return <>
    <h2>Window</h2>
    <h3>{size} px</h3>
    </>
}
// memory leak will happen so for that so clean up 
export default useCleanUp