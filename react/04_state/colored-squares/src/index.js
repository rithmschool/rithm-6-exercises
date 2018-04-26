import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SquareContainer from './SquareContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SquareContainer />, document.getElementById('root'));
registerServiceWorker();
