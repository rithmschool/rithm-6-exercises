import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CoinContainer from './CoinContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CoinContainer />, document.getElementById('root'));
registerServiceWorker();
