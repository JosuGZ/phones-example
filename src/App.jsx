import * as React from 'react';
import { connect } from 'react-redux';

import * as Actions from './actions';

import { Loading } from './components/Loading';
import { PhoneListContainer } from './components/PhoneListContainer';

@connect((store) => {
  return {
    phones: store.phones
  };
})
export class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(Actions.getPhones);
  }

  render() {
    return (
      <div className="expand">
        <div className="header">
          <h1>Bienvenido!</h1>
        </div>

        <div className="content">
        {
          (
            this.props.phones !== null ?
              <PhoneListContainer phones={this.props.phones} />
            :
              <Loading />
          )
        }
        </div>
      </div>
    );
  }

}
