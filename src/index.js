import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// const inputEle = (
//   <input
//     defaultValue="10"
//     onClick={() => console.log('clicked')}
//   />
// )

// ReactDOM.render(inputEle, document.getElementById('container'))


// ReactDOM.render(
//   <Hello name="World" />,
//   document.getElementById('container')
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
