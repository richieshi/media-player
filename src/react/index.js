import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App.jsx'
import Controls from './reducers/Controls.js';

require('./index.scss')
let store = createStore(Controls, {
    isPlaying: false
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);