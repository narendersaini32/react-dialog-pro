/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import { Dialog } from './dialog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openDialog = () => {
    this.setState({ dialog: true });
  };

  closeDialog = () => {
    this.setState({ dialog: false });
  };

  render() {
    const { dialog } = this.state;
    return (
      <>
        {dialog && (
          <Dialog onClose={this.closeDialog}>
            <div>This is an Awesome Dialog</div>
            🤪 🤪 🤪 🤪 🤪 🤪
          </Dialog>
        )}
        <button onClick={this.openDialog}>Open Dialog</button>
      </>
    );
  }
}

export default hot(App);
