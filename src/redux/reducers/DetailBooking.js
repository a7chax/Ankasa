const initialState = {
  data: {},
};

const DetailBooking = (state = initialState, action = {}) => {
  console.log(action.payload);
  console.log('action.payload');
  switch (action.type) {
    case 'GETDETAILBOOKING':
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default DetailBooking;
