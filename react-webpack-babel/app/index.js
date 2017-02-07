import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Avatar from './components/avatar'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Jared',
      username: 'jaredAnders',
      imageUrl: 'https://avatars1.githubusercontent.com/u/16006397?v=3&s=460'
    };
  }

  render() {
    return (
      <div>
        <Avatar
          name={this.state.name}
          username={this.state.username}
          imageUrl={this.state.imageUrl} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
