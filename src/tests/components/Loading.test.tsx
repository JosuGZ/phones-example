import * as React from 'react';
import { shallow } from 'enzyme';
import { Loading } from '../../components/Loading';

describe('Loading', () => {
  const loading = shallow(<Loading/>);

  it('match snapshot', () => {
    expect(loading).toMatchSnapshot();
  });

});
