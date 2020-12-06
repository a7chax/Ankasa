const initalState = {
  data: {},
  dataReceiver : {}
};


const Chat = (state =initalState, action = {}) => {
	switch (action.type){
		case 'GET_CHAT' :
			return{
				...state,
				data : action.payload
			};
		case 'GET_CHAT_RECEIVER' :
			return{
				...state,
				dataReceiver  : action.payload
			};
		default :
			return state
	}
};


export default Chat