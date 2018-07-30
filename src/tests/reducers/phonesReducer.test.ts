import { phonesReducer } from '../../reducers/phonesReducer';

describe('phonesReducer', () => {
  var state: any = null;

  it('can get phones', () => {
    var state = phonesReducer(state, {
      type: 'GET_PHONES',
      payload: 'testPayload'
    });
    expect(state).toBe('testPayload');
  });

  it('does not change state on unknown action', () => {
    var newState = phonesReducer(state, {
      type: 'asdf'
    });
    expect(newState).toBe(state);
  });

  it('can be reseted', () => {
    var state = phonesReducer(state, {
      type: 'RESET'
    });
    expect(state).toBe(null);
  });

  it('does not change state on unknown action', () => {
    var newState = phonesReducer(state, {
      type: 'asdf'
    });
    expect(newState).toBe(state);
  });

});
