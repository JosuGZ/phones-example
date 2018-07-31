import * as React from 'react';

import { PhoneDetailComponent } from './PhoneDetailComponent';

export interface PhoneItemProps {
  phone: any;
}

interface PhoneItemState {
  showDetails: boolean;
}
export class PhoneItem extends React.Component<PhoneItemProps, PhoneItemState> {

  constructor(props: PhoneItemProps) {
    super(props);

    this.state = {
      showDetails: false
    };

    this.openDetails = this.openDetails.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
  }

  shouldComponentUpdate(nextProps: PhoneItemProps, nextState: PhoneItemState) {
    var updated = false;

    if (this.props.phone !== nextProps.phone) updated = true;
    if (this.state.showDetails !== nextState.showDetails) updated = true;

    return updated;
  }

  openDetails() {
    this.setState({
      showDetails: true
    })
  }

  closeDetails() {
    this.setState({
      showDetails: false
    })
  }

  render() {
    var props = this.props;
    var state = this.state;

    return (
      <div className="phone-outer-box">
        <div className="phone" onClick={this.openDetails}>
          <div className="img-container">
            <img src={props.phone.image} />
          </div>
          <div className="name">{props.phone.name}</div>
        </div>
        { state.showDetails && <PhoneDetailComponent phone={props.phone} onClose={this.closeDetails} />}
      </div>
    );
  }

}
