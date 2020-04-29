import React, { Component } from 'react';
import AppPresenter from './AppPresenter';
import { Store } from 'store';

class AppContainer extends Component {
  changeMessage = () => {
    if (this.state.message === 'Hello') {
      this.setState({
        message: 'Bye bye',
      });
    } else {
      this.setState({
        message: 'Hello',
      });
    }
  };

  state = {
    message: 'Hello',
    changeMessage: this.changeMessage,
  };

  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
