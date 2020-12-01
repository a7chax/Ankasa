const initialState = {
  data: {},
};

const Profiles = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GETPROFILES':
      return {
        ...state,
        data: action.payload,
      };

    // case 'AUTHLOGOUT':
    //   return {
    //     ...state,
    //     token: '',
    //     isLogin: false,
    //   };

    default:
      return state;
  }
};

export default Profiles;
