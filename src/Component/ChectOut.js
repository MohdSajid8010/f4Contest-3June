import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {checkout} from "../redux/actions/cartActionCreator";

const ChectOut = () => {
    // let x=useSelector((state)=> console.log(state));//cart_data
    let cart_data = useSelector((state) => state.cart_data);//cart_data
    console.log(cart_data)
    let dispatch = useDispatch();
    function tprice() {
        let sum = 0;
        cart_data.forEach((obj) => {
            sum += obj.price
        })
        return sum;
    }
    return (
        <div>
            <div className="checkout">
                <div>Checkout List</div>

                <div className="rows">
                    {
                        cart_data && (
                            cart_data.map((obj,i) => {
                                return (
                                    <div className="row" key={i}>
                                        <div>{obj.title} </div>
                                        <div>${obj.price}</div>
                                    </div>
                                )
                            })
                        )
                    }


                </div>

                <div className="last-row">
                    <div>Total</div>
                    <div>${tprice()}</div>
                </div>
                <button id="chechoutbtn" onClick={() => dispatch(checkout())}>Click To Checkout</button>
            </div>

        </div>
    )
}

export default ChectOut
