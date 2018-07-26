import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';
import getData from './data/getJSONData'

const app = document.getElementById('app');
getData();

ReactDOM.render(<App />, app);