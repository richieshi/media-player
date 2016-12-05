import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx'

require('./index.scss')
render(<App />, document.getElementById('app'));