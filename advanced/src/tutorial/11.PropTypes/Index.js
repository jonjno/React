import React from 'react';
import Product from './Product';
import useFetch from '../10.customeHooks/useFetch.js';





const Index = () => {

    const url ='https://course-api.com/react-prop-types-example';
    console.log(url)
const product = useFetch(url)
   console.log(product)
  return (
    <div>
        <h3>Products</h3>
   <section className='products'> 
 {
    product.map((pro) => (
      <Product key={pro.id} {...pro} />
    ))
  }
</section>

    </div>
  )
}

export default Index
