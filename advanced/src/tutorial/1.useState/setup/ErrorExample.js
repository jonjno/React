import React from 'react';

const ErrorExample=()=>{
   let title = 'Hey Jino';

  const  clickhandler=()=>{
      title='Hello People';
      console.log(title)
   }
return (
   <React.Fragment>
    <h2>{title}</h2>
    <button type ="button" className='btn' onClick={clickhandler}>Change Here</button>
   </React.Fragment>
)
}
export default ErrorExample;
// Here the hello people is not updated because we are  not re rendering the componenet
// and also we have no way to preserve the value of titile while rendering
// so we need to keep the value between render and also trigger that re render.