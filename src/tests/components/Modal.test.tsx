import * as React from 'react';
import { shallow } from 'enzyme';
import { Modal } from '../../components/Modal';

describe('Component Modal', () => {
  const title = 'Title';
  const body = 'Body';
  const onClose = () => {};
  const modal = shallow(<Modal title={title} body={body} onClose={onClose}/>);

  it('match snapshot', () => {
    expect(modal).toMatchSnapshot();
  });

});
