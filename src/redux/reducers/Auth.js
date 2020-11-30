const initalState = {
  token: '',
  isLogin: false,
};

const Auth = (state = initalState, action = {}) => {
  switch (action.type) {
    case 'AUTHLOGIN':
      return {
        ...state,
        token: action.payload,
        isLogin: true,
      };

    case 'AUTHLOGOUT':
      return {
        ...state,
        token: '',
        isLogin: false,
      };

    default:
      return state;
  }
};

export default Auth;
