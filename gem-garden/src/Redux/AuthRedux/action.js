import axios from "axios";
import {
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  FETCH_USER_DATA_FAILURE,
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "./actionType";

const loginSuccess = () => (dispatch) => {
 // dispatch({ type: LOGIN_REQUEST });
  dispatch({ type: LOGIN_SUCCESS });
  //dispatch({type: ADMIN_LOGIN});
};
const loginFailure = ()=> (dispatch) => {
  dispatch({ type: LOGIN_FAILURE });
};

const logOut =(dispatch) =>{
  dispatch({type:ADMIN_LOGOUT});
}

const Base_URL = "https://gem-garden-backend-server.onrender.com/" 

const getUserData = () => (dispatch) => {
  dispatch({ type: FETCH_USER_DATA_REQUEST });
  return axios
    .get(`${Base_URL}users`)
    .then((res) => {
      dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: FETCH_USER_DATA_FAILURE, payload: err }));
};

export { loginSuccess, getUserData, loginFailure,logOut };
export const a = (id) => {
  axios.delete(`${Base_URL}users`, id);
};
