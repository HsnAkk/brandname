import axios from 'axios';
import { DATA_REQUEST, DATA_SUCCESS, DATA_FAIL } from './types';


export const fetchData = () => (dispatch) => {
    dispatch({ type: DATA_REQUEST });
    axios
        .get("http://localhost:5000/")
        .then( res => {
            dispatch({
                type: DATA_SUCCESS,
                payload: res.data
        })})
        .catch (err => {
            dispatch({ type: DATA_FAIL, payload: err.message })});
}