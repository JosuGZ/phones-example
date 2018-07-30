import * as Axios from 'axios';
import { AppConfig } from '../../config';

export const getPhones = function(dispatch) {
  dispatch({
    type: 'RESET',
    payload: null
  });
  Axios.default.get(AppConfig.apiUrl + '/phones').then(response => {
    dispatch({
      type: 'GET_PHONES',
      payload: response.data
    });
  }).catch(error => {
    console.error(error);
  });
};
