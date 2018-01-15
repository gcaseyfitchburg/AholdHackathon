import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import RouteReact from './route.js';

ReactDOM.render(<RouteReact />, document.getElementById('root'));
registerServiceWorker();
