import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //ReactDom.render의 <APP/>태그와 이름이 같아야함(뒤의 파일명(./APP은 상관없음)
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
