import axios from "axios"
import { ADMIN_DELETE_REQUEST, ADMIN_EDIT_REQUEST, POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from "./actionTypes"
import { GET_PRODUCT_FAILURE } from "./actionTypes"

const Base_URL = "https://gem-garden-backend-server.onrender.com/" 

export const editProduct = (id, data) => (dispatch) => {

    return axios.patch(`${Base_URL}products/${id}`,data)
    .then((res)=>{
        console.log(res);
        dispatch({type: ADMIN_EDIT_REQUEST, })
    })

    .catch((res)=>[
        dispatch({type: GET_PRODUCT_FAILURE})
    ])
}

export const deleteProduct = (id) => (dispatch) => {

    return axios.delete(`${Base_URL}products/${id}`)
    .then((res)=>{
        console.log(res);
        dispatch({type: ADMIN_DELETE_REQUEST, payload: id})
    })

    .catch((res)=>[
        dispatch({type: GET_PRODUCT_FAILURE})
    ])
}


// Add a Product
export const postProduct = (productData) => (dispatch) => {
    dispatch({ type: POST_PRODUCT_REQUEST });
  
    return axios.post(`${Base_URL}products`, productData)
      .then((res) => {
        dispatch({ type: POST_PRODUCT_SUCCESS, payload: res.data });
      })

      .catch((error) => {
        dispatch({ type: POST_PRODUCT_FAILURE, payload: error.message });
      });
  };