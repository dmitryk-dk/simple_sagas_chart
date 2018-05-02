import * as actionTypes from '../actions/action_types';

const messages = (state= [], action) => {
    switch(action.type) {
        case actionTypes.ADD_MESSAGE:
        case actionTypes.MESSAGE_RECIEVED:
            console.log("reducer message ->>",action.author);
            return state.concat([
                {
                    message: action.message,
                    author: action.author,
                }
            ]);
        default: 
            return state;
    }
}

export default messages;
