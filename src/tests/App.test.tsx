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
  const div = document.createElement('div');
  var numberOfLogs = 0;
  const logger = console.log;
  const logCounter = (...args) => {
    numberOfLogs++;
    logger(...args);
  };
  console.log = logCounter;
  var numberOfErrorLogs = 0;
  const errorLogger = console.log;
  const errorLogCounter = (...args) => {
    numberOfErrorLogs++;
    errorLogger(...args);
  };
  console.error = errorLogger;
  const sleep = (timeout: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }

  it('renders without crashing', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
  });

  it('match snapshot', () => {
    expect(div).toMatchSnapshot();
  });

  // This test needs and online API
  // it('has loaded phones after three seconds (if it fails, make sure the API is online)', async () => {
  //   await sleep(3000);
  //   expect(div.getElementsByClassName('phone').length).toBeGreaterThan(0);
  // });

  it('does not call console.error', () => {
    expect(numberOfErrorLogs).toBe(0);
  });

  ReactDOM.unmountComponentAtNode(div);
});
