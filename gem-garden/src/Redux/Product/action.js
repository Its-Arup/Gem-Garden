import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"
import axios from 'axios'

const Base_URL = "https://gem-garden-backend-server.onrender.com/" 

export const getProduct = (params) => (dispatch)=>{
    dispatch({type: GET_PRODUCT_REQUEST})
    axios.get(`${Base_URL}products`,params)
    .then((res)=>{
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res})
        // console.log(res.headers.x-total-count);
    })
    .catch((res)=>{
        dispatch({type: GET_PRODUCT_FAILURE})
    })
}