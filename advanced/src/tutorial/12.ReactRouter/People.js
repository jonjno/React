import React, { useState } from 'react';
import { data } from '../../data';
import { Link } from 'react-router-dom';



const People = () => {
    const [people,setPeople] = useState(data)
  return (
    <div>
   <h1>People List</h1>
   {people.map((per)=>{
    return(
        <div key={per.id} className='item'>
             <h2>
                {per.name}
                <Link to= {`/person/${per.id}`} className="btn">Learn More</Link>
             </h2>
            </div>
    )
   })}
    </div>
  )
}

export default People
