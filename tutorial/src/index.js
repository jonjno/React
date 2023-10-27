import React, { Children } from 'react';
import  ReactDOM from 'react-dom';
import './index.css';
import {book}  from './books.js'
import  Book from './bookEventlistner'
// function Greeting(){
//   return(
//     <h4>Hai I am Jino John</h4>
//   )
// }

// ReactDOM.render(<Greeting></Greeting>,document.getElementById('root'));

// if more element add div after return

// This is stateless function
// and always should return jxs

// another way create element

// const Greeting= ()=>{
//   return  React.createElement('h1',{},'helo world')
// }

// const Greeting= ()=>{
//   return  React.createElement('div',{},React.createElement('h1',{},'helo world))
// }

// jsx rules
// return single element
// div/section/article/or fragment
// classname instaed of class
// formatting

// Nested Component,react tools

//  function Greeting(){
//    return(
//     <div>
//       <Person/>
//       <h4>this is my message</h4>
//       <Message/>
//     </div>
    
//   )
//  }
// const Person =()=>  <h2>John Doe</h2>

// const Message =()=>{
//   return <p>This is my message</p>
// }
// 


// Mini book project

//  set up var



// const firstBook ={
//   img : "https://m.media-amazon.com/images/I/81-bNPTdhKL._SY425_.jpg",
//   title :'I love you to the moon and back',
//   author:"jino john"
// }
// const SecondBook ={
//   img : "https://images-na.ssl-images-amazon.com/images/I/81+MJor-K6L._AC_UL254_SR254,254_.jpg",
//   title :'Build the life',
//   author:"kenny west"
// }


function BookList(){
   return(
    <section className='bookList'>
      {book.map((book)=>{
        return (
          <Book key={book.id} {...book} /> 
          // {...book}/> spread operator
          // book ={book}/> object
        )
        // const {img,title,author} =  book;
        // return <div>
            // <h3>{title}</h3>
            // <h3>{author}</h3>
        // </div>
      })}
       </section>
    
  )
 }
    
     {/* <Book img = {firstBook.img}
      title={firstBook.title} 
      author={firstBook.author}/> */}
        {/* props children */}
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias ipsa explicabo architecto quo. Optio nulla et, praesentium eaque quisquam odit aperiam numquam officia cupiditate tempore pariatur nobis possimus? Ipsam!</p>
      </Book> */}
     {/* <Book img = {SecondBook.img}
      title={SecondBook.title} 
      author={SecondBook.author}/> */}
   




ReactDOM.render(<BookList/>,document.getElementById('root'));
