import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/action_types';

const handleMessage = function* handleMessage(values) {
    yield takeEvery(actionTypes.ADD_MESSAGE, (action) => {
        action.author = values.author;
        values.WS.send(JSON.stringify(action));
    });
}

export default handleMessage;
