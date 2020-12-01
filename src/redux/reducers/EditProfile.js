const initialState = {
    data: []
};

const EDITPROFILE = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'PATCHPROFILE':
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

export default EDITPROFILE;