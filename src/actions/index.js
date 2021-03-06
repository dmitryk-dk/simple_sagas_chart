import * as actionTypes from './action_types';

let nextMessageId = 0
let nextUserId = 0

export const addMessage = (message, author) => ({
    type: actionTypes.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author,
});

export const addUser = (user) => ({
    type: actionTypes.ADD_USER,
    id: nextUserId++,
    user,
});

export const messageReceived = (message, author) => ({
    type: actionTypes.MESSAGE_RECIEVED,
    id: nextMessageId++,
    message, 
    author,
});

export const populateUsersList = (users) => ({
    type: actionTypes.USERS_LIST,
    users,
});
