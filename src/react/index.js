import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App.jsx'
import Reducers from './reducers/Reducers';
require('./index.scss')

let store = createStore(Reducers);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);