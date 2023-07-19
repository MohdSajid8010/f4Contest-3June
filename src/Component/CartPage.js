import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeFromCart} from "../redux/actions/cartActionCreator"
import ChectOut from "./ChectOut"
const CartPage = () => {
    // let x=useSelector((state)=> console.log(state));cart_data
    let cart_data=useSelector((state)=> state.cart_data);
let dispatch=useDispatch();

    return (
        <div>
            <h1 className="center">All Items in Cart</h1>

            <div className='prod-container'>

                {
                    
                    cart_data.map((obj, i) => {
                            return (
                                <div className="product" key={i}>
                                    <img src={obj.thumbnail} alt="" />
                                    <div>{obj.title}</div>
                                    <div>{obj.description}</div>
                                    <div className="prod_info">
                                        <div>
                                            <div>price: {obj.price}</div>
                                            <div>discount:{obj.discountPercentage}%</div>
                                            <div>rating:{obj.rating}</div>
                                        </div>

                                        <div>
                                            <div>stock:{obj.stock}</div>
                                            <div>brand: {obj.brand}</div>
                                            <div>category: {obj.category}</div>
                                        </div>
                                    </div>
                                    <button onClick={()=> dispatch(removeFromCart(obj.id))}>Remove from Cart</button>
                                </div>
                            )
                        })
                    
                }
            </div>
            <ChectOut/>
        </div>
    )
}

export default CartPage