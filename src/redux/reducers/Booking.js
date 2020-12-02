const initalState = {
  data: [],
  searchData: [],
};

const Booking = (state = initalState, action = {}) => {
  switch (action.type) {
    case 'GET_CITY':
      return {
        ...state,
        data: action.payload,
      };
    case 'GET_FLIGHT_RESULT':
      return {
        ...state,
        searchData: action.payload,
      };

    default:
      return state;
  }
};

export default Booking;
