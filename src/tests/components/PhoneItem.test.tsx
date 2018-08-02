import * as React from 'react';
import { shallow } from 'enzyme';
import { PhoneDetailComponent, PhoneDetailComponentProps } from '../../components/PhoneDetailComponent';
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

  it('does not contain a PhoneDetailComponent', () => {
    expect(phoneItem.find(PhoneDetailComponent).length).toBe(0);
  });

  it('opens', () => {
    phoneItem.find('.phone').simulate('click');
    expect(phoneItem.find(PhoneDetailComponent).length).toBe(1);
  });

  it('can be closed', () => {
    const phoneDetailComponent: React.ReactElement<PhoneDetailComponentProps> = (
      phoneItem.find(PhoneDetailComponent).get(0)
    );
    phoneDetailComponent.props.onClose();
    phoneItem.update();
    expect(phoneItem.find(PhoneDetailComponent).length).toBe(0);
  })

});
