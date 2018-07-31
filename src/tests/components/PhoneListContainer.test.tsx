import * as React from 'react';
import { shallow } from 'enzyme';
import { PhoneListContainer } from '../../components/PhoneListContainer';

describe('Component PhoneListContainer', () => {
  const phones = [1, 2, 3, 4];
  const phoneListContainer = shallow(<PhoneListContainer phones={phones}/>);

  it('match snapshot', () => {
    expect(phoneListContainer).toMatchSnapshot();
  });

});
