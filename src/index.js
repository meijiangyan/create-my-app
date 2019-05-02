import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './store';
import './index.css';
import App from './App';
import RouterPage from './router';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <Provider store={store}>
//     <AppContainer>
//       <App />
//     </AppContainer>
//   </Provider>,
//   document.getElementById('root'));
const render = Component => {
  ReactDOM.render(
      //绑定redux、热加载
      <Provider store={store}>
          <AppContainer>
              <Component />
          </AppContainer>
      </Provider>,
      document.getElementById('root'),
  )
}

render(RouterPage);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router', () => {
      render(RouterPage);
  })
}

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
