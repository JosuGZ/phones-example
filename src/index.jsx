import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { reducer } from './reducers';
import { App } from './App';

const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};
const middleware = applyMiddleware(Thunk, logger);

const store = createStore(reducer, {
  phones: null
}, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
