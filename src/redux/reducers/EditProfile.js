const initialState = {
    data: []
};

const EDITPROFILE = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'FAILED_EDIT_USER':
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

export default EDITPROFILE;