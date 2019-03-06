import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { compose, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import persistState from 'redux-localstorage';

import rootReducer from './reducers';

const enhancer = compose(
    persistState(),
    applyMiddleware(logger)
)

const store = createStore(
    rootReducer,
    enhancer
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
