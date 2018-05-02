import * as actionTypes from '../actions/action_types';

const users = (state=[], action) => {
    switch(action.type) {
        case actionTypes.ADD_USER:
            return state.concat([
                {
                    name: action.user,
                    id: action.id,
                }
            ]);
        case actionTypes.USERS_LIST:
            return action.users;
        default: 
            return state;
    }
}

export default users;
