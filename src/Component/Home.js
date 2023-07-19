import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProductRequest, fetchProductSuccess, fetchProductFailure, getProductFromApi } from '../redux/actions/prodActionCreator'
import axios from "axios";
import { addToCart } from "../redux/actions/cartActionCreator";

const Home = () => {
    // let data = useSelector((state) => console.log(state))//prod_data
    let { loading, data, error } = useSelector((state) => state.prod_data)
    console.log(loading, data, error);

    let dispatch = useDispatch()

    let [isAdded, setIsAdded] = useState(false)
    function add_in_cart_helper(obj)
    {
         dispatch(addToCart(obj))
         setIsAdded(true)
    }
    // useEffect(() => {
    //     dispatch(fetchProductRequest())
    //     axios.get("https://dummyjson.com/products")
    //         .then((response) => {
    //             // console.log(response.data);
    //             dispatch(fetchProductSuccess(response.data))
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             dispatch(fetchProductFailure(error.message));
    //         })
    // }, [])

    useEffect(() => {
        dispatch(getProductFromApi())
    }, [])
    return (
        <div>
            <h1 className="center">All Items</h1>

            <div className='prod-container'>

                {
                    data.products &&
                    (
                        data.products.map((obj, i) => {
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
                                    {/* <button onClick={()=>add_in_cart_helper(obj)}>{isAdded ? ("Added") : ("Add in Cart")}</button> */}
                                    <button onClick={()=>dispatch(addToCart(obj))}>Add in Cart</button>

                                </div>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Home