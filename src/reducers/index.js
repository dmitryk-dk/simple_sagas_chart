import { combineReducers } from 'redux';
import messages from './messages';
import users from './users';

export const chartReducers = combineReducers({
    messages,
    users,
});

