import * as React from 'react';
import { shallow } from 'enzyme';
import { PhoneListContainer } from '../../components/PhoneListContainer';
import { PhoneItem } from '../../components/PhoneItem';

describe('Component PhoneListContainer', () => {
  const phones = [1, 2, 3, 4];
  const phoneListContainer = shallow(<PhoneListContainer phones={phones}/>);

  it('match snapshot', () => {
    expect(phoneListContainer).toMatchSnapshot();
  });

  it('contains 4 phones', () => {
    expect(phoneListContainer.find(PhoneItem).length).toBe(4)
  });

  it('contains 6 phones', () => {
    expect(shallow(<PhoneListContainer phones={[1, 2, 3, 4, 5, 6]}/>).find(PhoneItem).length).toBe(6)
  });

  it('contains 1 phone', () => {
    expect(shallow(<PhoneListContainer phones={[1]}/>).find(PhoneItem).length).toBe(1)
  });

  it('contains no phones', () => {
    expect(shallow(<PhoneListContainer phones={[]}/>).find(PhoneItem).length).toBe(0)
  });

});
