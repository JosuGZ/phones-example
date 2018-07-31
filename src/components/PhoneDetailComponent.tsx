import * as React from 'react';

import { Modal } from './Modal';

export interface PhoneDetailComponentProps {
  phone: any;
  onClose: () => void;
}

export class PhoneDetailComponent extends React.Component<PhoneDetailComponentProps, undefined> {

  shouldComponentUpdate(nextProps: PhoneDetailComponentProps) {
    var updated = false;

    if (this.props.phone !== nextProps.phone) updated = true;

    return updated;
  }

  render() {
    var body = <pre>{JSON.stringify(this.props.phone, null, 2)}</pre>;
    var title = this.props.phone.name;

    return (
      <Modal title={title} body={body} onClose={this.props.onClose} />
    );
  }

}
