import { useDispatch, useSelector } from "react-redux"
import { remove } from "../Store/CartSlice"



const Cart=()=>{
const handleRemove=(productId)=>{
    dispatch(remove(productId))
}

const dispatch=useDispatch();
const products=useSelector((state)=>state.cart)

    return <div>
    <h3>Cart</h3>
<div className="cartWrapper">

{
    products.map((product)=>{
        return(
            <div className="cartCard">
<img src={product.image}/>
<h5>{product.title}</h5>
<h5>RS:{product.price}</h5>
<button className="btn" onClick={()=>handleRemove(product.id)}>Remove</button>
            </div>
        )
    })
}

</div>

    </div>
}

export default Cart