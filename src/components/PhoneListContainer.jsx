import * as React from 'react';
import { connect } from 'react-redux';

import { PhoneItem } from './PhoneItem';

// export interface PhoneListContainerProps {
//   phones: any[];
// }

export class PhoneListContainer extends React.Component {
  render() {
    return (
      <div className="phone-list-container">{
        this.props.phones.map((phone, index) => <PhoneItem key={index} phone={phone} />)
      }</div>
    );
  }
}
