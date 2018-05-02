import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { chartReducers } from './reducers';
import socket from './websocket';
import handleNewMessage from './sagas';
import usersname from './utils/name';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const chartStore = createStore(
    chartReducers, 
    applyMiddleware(sagaMiddleware)
);
const WS = socket(chartStore.dispatch, usersname);

sagaMiddleware.run(handleNewMessage, {WS, usersname});

ReactDOM.render(
    <Provider store={chartStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
