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
    var props = this.props;
    var phone = props.phone;

    var title = phone.name;
    var body = (
      <div className="phone-detail-component">
        {
          phone.images && <div className="image-gallery">{
            phone.images.map((image, index) => {
              return <img key={index} src={image} />
            })
          }</div>
        }
        { phone.description && <p>{phone.description}</p> }
        { phone.processor && <p>Procesador: {phone.processor}</p> }
        { phone.ram && <p>Memoria RAM: {phone.ram}</p> }
        { phone.storage && <p>Almacenamiento: {phone.storage}</p> }
        { phone.screen && phone.screen.size && <p>Pantalla de {phone.screen.size}"</p> }
        { phone.screen && phone.screen.width && phone.screen.height && <p>Resolución: {phone.screen.width}x{phone.screen.height}"</p> }
      </div>
    );

    return (
      <Modal title={title} body={body} onClose={props.onClose} />
    );
  }

}
