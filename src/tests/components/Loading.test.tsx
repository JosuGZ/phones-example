import * as React from 'react';
import { shallow } from 'enzyme';
import { Loading } from '../../components/Loading';

describe('Component Loading', () => {
  const loading = shallow(<Loading/>);

  it('match snapshot', () => {
    expect(loading).toMatchSnapshot();
  });

});
