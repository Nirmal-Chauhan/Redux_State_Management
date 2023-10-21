import React from 'react'
import { Link } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
const Navbar = () => {
    const items=useSelector((state)=>state.cart)
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
<span className='logo'>Redux Store</span>
<div>
    <Link className='navLink' to="/">Home</Link>
    <Link className='navLink' to="/cart">Cart</Link>
    <span className='cartCount'>Cart Items:{items.length}</span>
</div>
    </div>
  )
}

export default Navbar