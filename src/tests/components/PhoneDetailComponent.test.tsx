import * as React from 'react';
import { shallow } from 'enzyme';
import { PhoneDetailComponent } from '../../components/PhoneDetailComponent';

describe('Component PhoneDetailComponent', () => {
  const onClose = () => {};
  const testPhone = {
    name: 'OnePlus 3T',
    image: '/images/oneplus-3t-midnight-black.jpg',
    images: [
      '/images/oneplus-3t-midnight-black.jpg',
      '/images/oneplus-3t-3.jpg',
      '/images/oneplus-3-soft-gold.jpg'
    ],
    processor: 'Snapdragon 821',
    ram: '6GB',
    storage: '128GB',
    screen: {
      size: 5.5,
      width: 1980,
      height: 1920
    },
    description: 'Disfruta de la gama alta sin dejarte un riñón'
  };
  const phoneDetailComponent = shallow(<PhoneDetailComponent phone={testPhone} onClose={onClose}/>);

  it('match snapshot', () => {
    expect(phoneDetailComponent).toMatchSnapshot();
  });

});
