import * as React from 'react';

export interface ModalProps {
  title: JSX.Element | string;
  body: JSX.Element | string;
  onClose: () => void;
}

export class Modal extends React.Component<ModalProps, undefined> {

  shouldComponentUpdate(nextProps: ModalProps) {
    var updated = false;

    if (this.props.title !== nextProps.title) updated = true;
    if (this.props.body !== nextProps.body) updated = true;

    return updated;
  }

  render() {
    return (
      <div onClick={this.props.onClose} className="modal-container">
        <div className="modal-window">
          <div className="modal-window-header">
            <div className="title">{this.props.title}</div>
            <button onClick={this.props.onClose} className="close">X</button>
          </div>
          <div className="modal-window-body">
            {this.props.body}
          </div>
        </div>
      </div>
    );
  }

}
