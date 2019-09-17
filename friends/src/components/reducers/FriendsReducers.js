export const initialState = {
    friends: [
        {
            name: '',
            age: '',
            email: ''
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_FRIEND':
            return {
                ...state,
                friends: action.payload
            };

        default:
            return state;
    }
}