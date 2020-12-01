const initialState = {
    // token: '',
    // isLogin: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjA2NzgwNTA2fQ.QCTo2hwcAMJTXXG6T9xuEYb2P82EBub7eus08IX1HUc',
    data: ''
};

const FLIGHT = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'GET_DETAIL_FLIGHT':
            return {
                ...state,
                // token: action.payload,
                // isLogin: true,
                data: action.payload,
            };
        default:
            return state;
    }
};

export default FLIGHT;