import * as React from 'react';
import { shallow } from 'enzyme';
import { Modal } from '../../components/Modal';

describe('Component Modal', () => {
  const title = 'Title';
  const body = 'Body';
  var timesClosed = 0;
  const onClose = () => {timesClosed++};
  const modal = shallow(<Modal title={title} body={body} onClose={onClose}/>);

  it('match snapshot', () => {
    expect(modal).toMatchSnapshot();
  });

  it('closes with the button', () => {
    modal.find('.close').simulate('click');
    expect(timesClosed).toBe(1);
  });

  it('closes with the button', () => {
    modal.find('.modal-container').simulate('click');
    expect(timesClosed).toBe(2);
  });

});
