import * as React from 'react';
import { connect } from 'react-redux';

import * as Actions from './actions';

import { Loading } from './components/Loading';
import { PhoneListContainer } from './components/PhoneListContainer';

export interface AppProps {}

interface AppWithDispatchProps extends AppProps {
  dispatch: any;
}

interface AppWithPropsProps extends AppWithDispatchProps {
  phones: any;
}

class AppWithProps extends React.Component<AppWithPropsProps, any> {

  componentDidMount() {
    this.props.dispatch(Actions.getPhones);
  }

  render() {
    console.log('props', this.props);
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

function mapDispatchToProps(dispatch, props: AppProps): AppWithDispatchProps {
  return {...props, dispatch: dispatch};
}

function mapStateToProps(state: any, props: AppWithDispatchProps): AppWithPropsProps {
  return {...props, phones: state.phones};
}

export const App: React.ComponentClass<AppProps, any> = connect(
  mapStateToProps,
  mapDispatchToProps
) (AppWithProps);
