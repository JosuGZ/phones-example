export const phonesReducer = function(state = null, action) {
  switch (action.type) {
    case 'GET_PHONES':
      return action.payload;
    case 'RESET':
      return null;
    default:
      return state;
  }
};
