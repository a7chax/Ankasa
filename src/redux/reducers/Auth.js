const initalState = {
	token : '',
	loading : false,
	data : [],
	error : ''
}


const Auth = (state = initalState, action  = {})  => {
	switch(action.type){
	  case 'LOGIN_REQUEST':
	    return {
	      ...state,
	      loading: true,
	    };
	  case 'LOGIN_SUCCESS':
	    return {
	      ...state,
	      loading: false,
	      isLogin: true,
	      token: action.payload
	    };
	  case 'LOGIN_ERROR':
	    return {
	      ...state,
	      loading: false,
	      isLogin: false,
	      token:'',
	      error: action.payload
	    };
	  case 'LOGOUT':
	    return {
	      ...state,
	      loading: false,
	      isLogin: false,
	      token: '',
	      _persist: {
	        rehydrated: true,
	        version: -1
	      }
	    };
	  default :
	  	return state

	}
}

  export default Auth;
