import * as React from 'react';
import { shallow } from 'enzyme';
import { PhoneItem } from '../../components/PhoneItem';

describe('Loading', () => {
  const testPhone = {
    name: 'Test Model',
    image: '/images/test.jpg'
  };
  const phoneItem = shallow(<PhoneItem phone={testPhone}/>);

  it('match snapshot', () => {
    expect(phoneItem).toMatchSnapshot();
  });

});
