import axios from 'axios';

export const FETCH_FRIENDS_DATA_START = 'FETCH_FRIENDS_DATA_START';
export const FETCH_FRIENDS_DATA_SUCCESS = 'FETCH_FRIENDS_DATA_SUCCESS';
export const FETCH_FRIENDS_DATA_FAILURE = 'FETCH_FRIENDS_DATA_FAILURE';

export const getData = () => {

    return (dispatch) => {
        dispatch({ type: 'FETCH_FRIENDS_DATA_START'})
        axios.get('')
    }
}
