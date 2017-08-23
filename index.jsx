"use strict";

require("./js/jquery");
require('offline-js')

import 'bulma/css/bulma.css'
require("./css/react-select.css");

const React = require('react');
const ReactDOM = require('react-dom');

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'

const applyMiddleware = require("redux").applyMiddleware
const thunkMiddleware = require("redux-thunk").default
const createStoreWithMiddleware=applyMiddleware(thunkMiddleware)(createStore);
const store=createStoreWithMiddleware(reducer);

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Index = require("./components/routes")

ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>,
    document.getElementById('content')
);
