import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VendingMachine from './VendingMachine';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<VendingMachine />, document.getElementById('root'));
registerServiceWorker();
