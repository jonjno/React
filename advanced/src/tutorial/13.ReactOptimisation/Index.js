import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useFetch from '../10.customeHooks/useFetch';

const url = 'https://course-api.com/javascript-store-products'


const Index = () => {
    const {products} = useFetch(url);
    const[count,setCount] = useState(0);
    const[cart,setcart] = useState(0)

  const AddTocart=useCallback(()=>{
    setcart(cart+1)
  },[cart])


  const  calculateMostExpensive =(data)=>{
  console.log("hello");
  return (
    data.reduce((total,item)=>{
        const price = item.fields.price;
        if(price>= total){
            total = price
        }
        return total;
    },0)/100
  )
  }
const mostExpensive= useMemo(()=>
    calculateMostExpensive(products),[products]
)

  return (
    <div>
      <h1>{count}</h1>
      <button className='btn' onClick={()=>setCount(count+1)}>Click Me</button>
       <h1>Most expensive:${mostExpensive}</h1>
      <BigList products={products}addtoC ={ AddTocart}/>
    </div>
  )
}


const BigList =React.memo(({products,AddTocart})=>{

    useEffect(()=>{
        console.log("biglist called")
    })
return(
    <section className='products'>
{products && products.map((pro)=>{
    return <SingleProduct key ={pro.id}{...pro} addtoc={AddTocart}></SingleProduct>
})}
    </section>
)
})

const SingleProduct=({fields,addtoC})=>{

    useEffect(()=>{
        console.log("Single Item called")
    })
 const {name,price} = fields;
 price = price/100;
 const image = fields.image[0].url;

 return(
    <article className='product'>
    <image src={image} alt ={name}></image>
    <h4>{name}</h4>
    <p>${price}</p>
    <button className='btn' onClick={addtoC}>Add</button>
    </article>
 )
}
export default Index
