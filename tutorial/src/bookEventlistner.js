import React from 'react'
 const Book =({img,title,author})=>{
  // destructoring of props
// 1. const book =({img,title,author,children})
    //2. const {img,title,author} = props.book
   const clickHandler =(e)=>{
    // e has props
    console.log(e);
    console.log(e.target)
   alert("helo world")
   }
   const complexExample =()=>{
console.log(author)
   }
  return <article className='book' onMouseOver={()=>{
    console.log(title)
  }}>
    <img src={img} alt="" />
    <h1 onClick={()=>console.log(title)}>{title}</h1>
    {/* inline function onclick */}
    <h4 >{author}</h4>
    <button type="button" onClick={clickHandler}>Event Example</button>
   {/* {props.children} */}
   <button type='button' onClick={()=>complexExample(author)}>More exap</button>
   {/* if () it is not there it it automatticalyy invoked when the page is rendered we can see it on console.If
    it is there it will only invoked when the function is clicked.
    Do it when u have arugument to pass*/}
  </article>
 }



export default Book
