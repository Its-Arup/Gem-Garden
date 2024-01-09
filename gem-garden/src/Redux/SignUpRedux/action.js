import axios from "axios";
import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType";

const Base_URL = "https://gem-garden-backend-server.onrender.com/" 

export const signUp = (payload) => (dispatch)=>{
dispatch({ type: SIGNUP_REQUEST });
  console.log(payload)
  return axios.post(`${Base_URL}users`,payload)
    .then((res) => dispatch({ type: SIGNUP_SUCCESS}))
    .catch((err) => dispatch({ type: SIGNUP_FAILURE}));
}

