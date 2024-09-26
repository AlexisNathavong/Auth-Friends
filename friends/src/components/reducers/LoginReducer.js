// import { FETCH_FRIENDS_DATA_START, FETCH_FRIENDS_DATA_SUCCESS, FETCH_FRIENDS_DATA_FAILURE} from ''


export const initialState = {
    login: [
        {
            username: '',
            password: ''
        }
    ],
    isloading: false
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                login: [action.payload]
            }

        default:
            return state;
    }
}