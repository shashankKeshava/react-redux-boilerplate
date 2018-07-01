import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import Reducer from './store/combinedReducer';
import createSagaMiddleware from 'redux-saga';

// Root Container
import App from './container/app/';

// Define Initial State
const initialState = {};
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({ timestamp: true });
const store = createStore(
    Reducer,
    initialState,
    compose(
        applyMiddleware(thunk, logger, sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ),
    /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
