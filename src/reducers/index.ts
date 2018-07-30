import { combineReducers } from 'redux';

import { phonesReducer } from './phonesReducer';

export const reducer = combineReducers({
  phones: phonesReducer
});
