const initState = {
  destination: [],
};

const Destination = (state = initState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case 'SETDESTINATION':
      return {
        ...state,
        destination: payload,
      };

    default:
      return state;
  }
};

export default Destination;
