import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../Store/CartSlice';
const Products = () => {
    const dispatch=useDispatch()
    const[products,setProducts]=useState([])
    useEffect(()=>{
const fetchData=async()=>{
const api=await fetch("https://fakestoreapi.com/products")
const  data=await api.json()
// console.log(data)
setProducts(data);
}
fetchData()
    },[]);

    const handleClick=(product)=>{
       dispatch(add(product))
    }

  return (
    <div className='productsWrapper'>
{
products.map((product)=>{
    return(
        <div className='card' key={product.id}>
            <img src={product.image} alt="product_images"/>
            <h4>{product.title}</h4>
            <h4>Rs:{product.price}</h4>
            <button onClick={()=>handleClick(product)}>Add to Cart</button>
        </div>
    )
})

}
</div>
  )
}

export default Products