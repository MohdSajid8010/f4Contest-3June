import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "../actions/prodActionType.js";
let initial_state = [];

function filter_fun(prod_arr, prod_id) {

    console.log(prod_arr, prod_id)
    let prod_arr2 = prod_arr.filter((obj) => {
        return obj.id !== prod_id
    })
    console.log(prod_arr2)
    return prod_arr2;
}

function isRepeatingProduct(arr, new_obj) {
    for (let obj of arr) {
        if (obj.id == new_obj.id) return true;
    }
    return false;
}
function checkUnique(arr, new_obj) {
    if (!isRepeatingProduct(arr, new_obj)) {
        return [...arr, new_obj];
    }
    //product is repeating
    console.log("already added this product")
    alert("already added this product")
    return arr;
}
function checkout_helper()
{
    alert("items have been checkout out");
    return []
}
const cartReducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_TO_CART: return checkUnique(state, action.payload);// before adding new prod ensure it is not being added againg
        case REMOVE_FROM_CART: return filter_fun(state, action.payload)
        case CHECKOUT: return checkout_helper()
        default: return state;
    }
}

export default cartReducer