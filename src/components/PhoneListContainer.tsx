import * as React from 'react';
import { connect } from 'react-redux';

import { PhoneItem } from './PhoneItem';

export interface PhoneListContainerProps {
  phones: any[];
}

export const PhoneListContainer = function(props: PhoneListContainerProps) {
  return (
    <div className="phone-list-container">{
      props.phones.map((phone, index) => <PhoneItem key={index} phone={phone} />)
    }</div>
  );
}
