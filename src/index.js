import 'dotenv/config';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as ServiceWorker from './serviceWorker';

ReactDOM.render(< App / >
  , document.getElementById('root'));

ServiceWorker.register()