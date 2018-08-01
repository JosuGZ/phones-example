import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { reducer } from '../reducers';
import { App } from '../App';

const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};
const middleware = applyMiddleware(Thunk, logger);

const store = createStore(reducer, {
  phones: null
}, middleware);

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
