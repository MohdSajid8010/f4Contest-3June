import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCES, FETCH_PRODUCT_FAILURE } from "../actions/prodActionType.js";

let initial_state = {
    loading: false,
    data: [],
    error: "",
}


const prodReducers = (state = initial_state, action) => {

    switch (action.type) {
        case FETCH_PRODUCT_REQUEST: return { ...state, loading: true };
        case FETCH_PRODUCT_SUCCES: return { ...state, loading: false, data: action.payload, error: "" };
        case FETCH_PRODUCT_FAILURE: return { ...state, loading: false, error: action.payload };
        default: return state;
    }
}

export default prodReducers;