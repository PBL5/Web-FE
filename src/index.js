import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SideEffectClass from './testES6/SideEffectClass';
import TestHook from './testES6/TestHook';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

