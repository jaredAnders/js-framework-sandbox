import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Avatar from './components/avatar'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Jared'
    };
  }

  render() {
    return (
      <div>
        <Avatar name={this.state.name} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
