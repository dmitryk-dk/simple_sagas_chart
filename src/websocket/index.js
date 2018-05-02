import * as actionTypes from '../actions/action_types';
import { addUser, messageReceived, populateUsersList } from '../actions';

const socket = (dispatch, username) => {
    const websocket = new WebSocket('ws://localhost:8989');

    websocket.onopen = () => {
        websocket.send(JSON.stringify({
            type: actionTypes.ADD_USER,
            name: username,
        }));
        websocket.onmessage = (message) => {
            const data = JSON.parse(message.data);
            switch(data.type) {
                case actionTypes.ADD_MESSAGE:
                    dispatch(messageReceived(data.message, data.author));
                    break;
                case actionTypes.ADD_USER:
                    dispatch(addUser(data.name));
                    break;
                case actionTypes.USERS_LIST:
                    dispatch(populateUsersList(data.users));
                    break;
                default:
                    break;            
            }
        }
    }
    return websocket;
}

export default socket;

