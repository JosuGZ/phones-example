import * as React from 'react';
import { shallow } from 'enzyme';
import { PhoneItem } from '../../components/PhoneItem';

describe('Copmonent PhoneItem', () => {
  const testPhone = {
    name: 'Test Model',
    image: '/images/test.jpg'
  };
  const phoneItem = shallow(<PhoneItem phone={testPhone}/>);

  it('match snapshot', () => {
    expect(phoneItem).toMatchSnapshot();
  });

  it('opens', () => {
    phoneItem.find('.phone').simulate('click');
    expect(phoneItem).toMatchSnapshot();
  });

});
