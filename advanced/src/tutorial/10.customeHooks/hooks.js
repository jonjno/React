import React ,{useState,useEffect}from 'react';
import useFetch from './useFetch';

const Hooks = () => {
    const url = 'https://course-api.com/javascript-store-products'
    const{loading,product} = useFetch(url)
    console.log(product)
  return <>
  <h2>
 {loading? 'loading ...': 'data'}
  </h2>
  
    
  </>
    
     
  
}

export default Hooks
