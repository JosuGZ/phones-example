import * as React from 'react';

export const PhoneItem = (props) => {
  return (
    <div className="phone-outer-box">
      <div className="phone">
        <div className="img-container">
          <img src={props.phone.image} />
        </div>
        <div className="name">{props.phone.name}</div>
      </div>
    </div>
  );
}
