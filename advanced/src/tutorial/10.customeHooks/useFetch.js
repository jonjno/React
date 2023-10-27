import React,{useState,useEffect} from 'react'

const useFetch = (url) => {
    const [loading,setLoading] = useState('true');
    const [product,setProduct] =  useState('');

    const getProducts = async()=>{
      console.log(url)
        const data = await fetch(url)
        const response = await data.json();
        setProduct(response);
        setLoading(false);

    }
   
    useEffect(()=>{
     getProducts()
    },[url])
  return {loading,product}
    
  
}

export default useFetch
