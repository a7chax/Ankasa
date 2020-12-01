const initialState = {
    data: [],
  };
  
  const MyBooking = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'GETMYBOOKING':
        return {
          ...state,
          data: action.payload,
        };
  
      
  
      default:
        return state;
    }
  };
  
  export default MyBooking;
  