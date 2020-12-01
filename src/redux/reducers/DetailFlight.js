const initialState = {
    data: []
};

const FLIGHT = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'GET_DETAIL_FLIGHT':
            return {
                ...state,
                data: action.payload,
            };
        case 'FAILED_ADD_FLIGHT' :
            return {
                ...state,
                data : action.payload
            }
        default:
            return state;
    }
};

export default FLIGHT;